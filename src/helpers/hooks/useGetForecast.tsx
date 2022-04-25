import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { getLondonCoordinates } from "..";
import { WeatherApi } from "../api/weather";
import { IForecastData } from "../models/Forecast";

const key = "forecast";

const useGetForecast = () => {
  const fetchForecast = () =>
    WeatherApi.shared.get(
      `/forecast?${new URLSearchParams(getLondonCoordinates())}`
    );
  return useQuery<AxiosResponse<IForecastData> | undefined>(
    [key],
    fetchForecast
  );
};

export default useGetForecast;
