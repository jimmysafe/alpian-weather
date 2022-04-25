import Container from "../../components/common/elements/Container";
import useGetCurrentWeather from "../../helpers/hooks/useGetCurrentWeather";
import CurrentWeatherCard from "./components/current/CurrentWeatherCard";
import { useEffect, useState } from "react";
import { formatForecastData, IFormattedForecastItem } from "../../helpers";
import useGetForecast from "../../helpers/hooks/useGetForecast";
import { useWeatherContext } from "../../context/weather.provider";
import DaysList from "./components/days/DaysList";
import ForecastList from "./components/forecast/ForecastList";
import LocationHeader from "../../components/common/extensive/LocationHeader";

const HomePage = () => {
  const { setSelectedForecast } = useWeatherContext();
  const [forecasts, setForecasts] = useState<IFormattedForecastItem[]>([]);
  const { data: currentWeather } = useGetCurrentWeather();
  const { data: forecastData } = useGetForecast();

  useEffect(() => {
    if (forecastData?.data && forecastData.data.list.length > 0) {
      const formattedData = formatForecastData(forecastData.data.list);
      setForecasts(formattedData);
      setSelectedForecast(formattedData[0]);
    }
  }, [forecastData]);

  if (!currentWeather) return <p>Loading..</p>;

  return (
    <main className="py-14 px-2">
      <LocationHeader location={currentWeather.data.name} />
      <Container className="flex md:flex-row flex-col items-start justify-center lg:w-[65%] md:w-full lg:gap-10 md:gap-4">
        <div className="md:w-1/3 w-full">
          <CurrentWeatherCard data={currentWeather.data} />
        </div>
        <section className="md:w-2/3 w-full flex flex-col ">
          <DaysList forecasts={forecasts} />
          <ForecastList />
        </section>
      </Container>
    </main>
  );
};

export default HomePage;
