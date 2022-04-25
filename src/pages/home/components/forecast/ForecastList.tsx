import { useWeatherContext } from "../../../../context/weather.provider";
import ForecastHeader from "./ForecastHeader";
import ForecastRow from "./ForecastRow";

const ForecastList = () => {
  const { selectedForecast } = useWeatherContext();

  return (
    <div>
      <ForecastHeader
        date={selectedForecast?.date ?? ""}
        data={selectedForecast?.data ?? []}
      />
      <div className="flex flex-wrap">
        {selectedForecast?.data.map((forecast) => (
          <ForecastRow key={forecast.dt_txt} item={forecast} />
        ))}
      </div>
    </div>
  );
};

export default ForecastList;
