import { useEffect, useState } from 'react';

import UserHome from './UserHome';
import Login from './Login';
import { auth, createUserProfileDocument } from './firebase';
import { MainContext } from './MainContext';
import { getUserData } from './AppUtils';
import Spinner from './spinner/spinner.component';

const App = () => {
  const [user, setUser] = useState(null);
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCityData = (city) => {
    const cityLowerCase = city.toLowerCase();

    if (
      weatherData.find(
        (weatherOfCity) => weatherOfCity.name.toLowerCase() === cityLowerCase
      )
    ) {
      alert(`'${city}' city already included`);
      return;
    }

    fetch(
      `https://weather-app-backend-v2.herokuapp.com//weather/${cityLowerCase}/${user.uid}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.weather) {
          setWeatherData((weatherData) => [...weatherData, result]);
        } else {
          alert('wrong input city');
        }
      })
      .catch(console.log);
  };

  useEffect(() => {
    if (user) user.cities.map((city) => getCityData(city));
  }, [user]);

  // how do i fix the dependecy array problem ?

  useEffect(() => {
    return auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const { uid } = authUser;
        const provider = authUser.providerData[0].providerId;

        if (provider.includes('google'))
          createUserProfileDocument(
            authUser,
            authUser.displayName,
            getUserData(setUser)
          );

        if (!user) getUserData(setUser)(uid);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, []);

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        setWeatherData([]);
        console.log('signed out');
      })
      .catch('error signing out');
  };

  return (
    <MainContext.Provider
      value={{
        getCityData,
        weatherData,
        signOut,
        setLoading,
        email: user && user.email,
        getUserData: getUserData(setUser),
      }}
    >
      {loading ? <Spinner /> : user ? <UserHome /> : <Login />}
    </MainContext.Provider>
  );
};

export default App;
