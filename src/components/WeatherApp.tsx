import useGetCurrentWeather from "../helpers/hooks/useGetCurrentWeather";
import useGetForecastWeather from "../helpers/hooks/useGetForecastWeather";

const WeatherApp = () => {
  const { data: currentWeather } = useGetCurrentWeather();
  const { data: forecastWeather } = useGetForecastWeather();

  console.log("CURRENT: ", currentWeather?.data.name);
  console.log("FORECAST: ", forecastWeather?.data.city);

  return <div>WeatherApp</div>;
};

export default WeatherApp;
