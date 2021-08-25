import { useEffect, useState } from 'react';

import { withStyles } from '@material-ui/core/styles';

import { styles, getImageUrl, getDataForChart } from './WeatherContainerUtils';
import WeatherChart from '../WeatherChart/WeatherChart';
import WeatherCard from '../WeatherCard/WeatherCard';

const WeatherContainer = ({
  coord,
  main: { temp, humidity },
  name,
  timezone,
  weather,
  classes,
}) => {
  const [image, setImage] = useState(
    'https://st4.depositphotos.com/14953852/22772/v/1600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'
  );

  const [chartData, setChartData] = useState(null);

  const state = {
    lat: coord.lat,
    lon: coord.lon,
    temp,
    humidity,
    name,
    timezone,
    description: weather[0].main,
    iconURL: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
    time: null,
  };

  useEffect(
    () => getImageUrl(state.name.toLowerCase(), setImage),
    [state.name]
  );

  const setData = async () => {
    const data = await getDataForChart(state.lat, state.lon);
    setChartData(data);
  };

  return chartData ? (
    <WeatherChart
      city={state.name}
      data={chartData}
      setChartData={setChartData}
    />
  ) : (
    <WeatherCard
      classes={classes}
      setData={setData}
      timezone={state.timezone}
      name={state.name}
      temp={state.temp}
      humidity={state.humidity}
      description={state.description}
      iconURL={state.iconURL}
      image={image}
    />
  );
};

export default withStyles(styles)(WeatherContainer);
