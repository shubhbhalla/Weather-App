import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { getTime } from '../WeatherContainer/WeatherContainerUtils';

const WeatherCard = ({
  setData,
  name,
  temp,
  humidity,
  description,
  iconURL,
  timezone,
  classes,
  image,
}) => {
  return (
    <Card
      className={classes.card}
      onClick={() => setData()}
      style={{
        cursor: 'pointer',
      }}
    >
      <CardMedia className={classes.media} image={image} />
      <CardContent
        className={classes.content}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '20px',
        }}
      >
        <Typography
          className={'MuiTypography--heading'}
          variant={'h6'}
          gutterBottom
        >
          {name.toUpperCase()}
        </Typography>
        <Typography
          className={'MuiTypography--heading'}
          variant={'caption'}
          gutterBottom
        >
          {`Temperature: ${temp} C`}
        </Typography>
        <Typography
          className={'MuiTypography--subheading'}
          variant={'subtitle1'}
        >
          {`Humidity: ${humidity}`}
        </Typography>
        <Typography className={'MuiTypography--subheading'} variant={'caption'}>
          {`${description}`}
        </Typography>

        <Avatar className={classes.avatar} src={`${iconURL}`} />

        <Typography
          className={'MuiTypography--heading'}
          variant={'h6'}
          gutterBottom
          style={{ textAlign: 'center' }}
        >
          {getTime(timezone, new Date())}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
