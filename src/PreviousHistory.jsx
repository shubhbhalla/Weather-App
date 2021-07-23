import WeatherContainer from './WeatherContainer/WeatherContainer';
import { MainContext } from './MainContext';

import { useContext } from 'react';

const PreviousHistory = () => {
  const { weatherData } = useContext(MainContext);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: '20px',
      }}
    >
      {weatherData.map((data, i) => (
        <WeatherContainer key={i} {...data} />
      ))}
    </div>
  );
};

export default PreviousHistory;
