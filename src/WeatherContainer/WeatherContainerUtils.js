import moment from 'moment';

export const styles = (muiBaseTheme) => ({
  card: {
    maxWidth: 300,
    margin: '20px',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  },
  media: {
    paddingTop: '56.25%',
  },
  content: {
    textAlign: 'left',
    padding: muiBaseTheme.spacing(3),
  },
  divider: {
    margin: `${muiBaseTheme.spacing(3)}px 0`,
  },
  heading: {
    fontWeight: 'bold',
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: 'inline-block',
    border: '2px solid white',
  },
});

export const getImageUrl = (url, callback) => {
  fetch(`https://weather-app-backend-v2.herokuapp.com/image/${url}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.photos) {
        callback(res.photos[0].image.web);
      }
    })
    .catch(console.log);
};

export const getTime = (offset) => {
  let d = new Date();
  let localTime = d.getTime();
  let localOffset = d.getTimezoneOffset() * 60000;
  let utc = localTime + localOffset;
  let location = utc + 1000 * offset;
  let nd = new Date(location);

  return moment(nd).format('dddd, MMMM Do YYYY, h:mm:ss a');
};

export const getDataForChart = async (lat, long) => {
  const yesterdayTimeEpoch = moment().subtract(1, 'days').unix();

  const firstCall = await fetch(
    `https://weather-app-backend-v2.herokuapp.com/weather/history/${yesterdayTimeEpoch}/${lat}/${long}`
  );
  const data = await firstCall.json();

  const hourlyDates = data.hourly.map((date) => {
    const { dt } = date;
    return moment.unix(dt).format('hA, MMM D');
  });

  const timeArray = data.hourly.map((date) => date.temp);

  const humidityArray = data.hourly.map((date) => date.humidity);

  const formattedData = hourlyDates.map((time, index) => {
    return [time, timeArray[index], humidityArray[index]];
  });

  formattedData.unshift([`Time in ${data.timezone}`, 'Temp', 'Humidity']);

  return formattedData;
};
