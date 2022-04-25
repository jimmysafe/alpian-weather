import React, {
  useContext,
  useState,
  useMemo,
  SetStateAction,
  Dispatch,
} from "react";
import { IFormattedForecastItem } from "../helpers";

type WeatherContextType = {
  selectedForecast: IFormattedForecastItem | undefined;
  setSelectedForecast: Dispatch<
    SetStateAction<IFormattedForecastItem | undefined>
  >;
};

/* eslint-disable */
export const WeatherContext = React.createContext<WeatherContextType>({
  selectedForecast: undefined,
  setSelectedForecast: () => {},
});
/* eslint-enable */

type WeatherProviderProps = { children: React.ReactNode };

const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [selectedForecast, setSelectedForecast] = useState<
    IFormattedForecastItem | undefined
  >();

  // All exported values go here
  const value = useMemo<WeatherContextType>(
    () => ({
      selectedForecast,
      setSelectedForecast,
    }),
    [selectedForecast]
  );

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);

export default WeatherProvider;
