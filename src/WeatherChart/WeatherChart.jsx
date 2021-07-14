import { Button } from '@material-ui/core';
import Chart from 'react-google-charts';

const WeatherChart = ({ city, data, setChartData }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          title: `24Hrs weather report of ${city}`,
          hAxis: {
            title: `Time at ${city}`,
            titleTextStyle: { color: '#333' },
          },
          vAxis: { minValue: 0 },
          chartArea: { width: 'auto', height: 'auto' },
        }}
      />
      <Button onClick={() => setChartData(null)}>Go Back</Button>
    </div>
  );
};

export default WeatherChart;
