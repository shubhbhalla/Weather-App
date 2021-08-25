export const getUserData = (setUser) => (uid) => {
  fetch(`https://weather-app-backend-v2.herokuapp.com/user/${uid}`)
    .then((res) => res.json())
    .then((res) => {
      setUser({ ...res, uid });
    })
    .catch(() => console.log('error occured'));
};
