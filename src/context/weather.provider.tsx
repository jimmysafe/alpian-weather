import React, {
  useContext,
  useState,
  useMemo,
  SetStateAction,
  Dispatch,
} from "react";
import Offline from "../components/common/generic/Offline";
import { IFormattedForecastItem } from "../helpers";
import useIsOnline from "../helpers/hooks/useIsOnline";

type WeatherContextType = {
  selectedForecast: IFormattedForecastItem | undefined;
  setSelectedForecast: Dispatch<
    SetStateAction<IFormattedForecastItem | undefined>
  >;
  isOnline: boolean;
};

/* eslint-disable */
export const WeatherContext = React.createContext<WeatherContextType>({
  selectedForecast: undefined,
  setSelectedForecast: () => {},
  isOnline: true,
});
/* eslint-enable */

type WeatherProviderProps = { children: React.ReactNode };

const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const { isOnline } = useIsOnline();

  const [selectedForecast, setSelectedForecast] = useState<
    IFormattedForecastItem | undefined
  >();

  // All exported values go here
  const value = useMemo<WeatherContextType>(
    () => ({
      selectedForecast,
      setSelectedForecast,
      isOnline,
    }),
    [selectedForecast, isOnline]
  );

  return (
    <WeatherContext.Provider value={value}>
      <Offline offline={!isOnline} />
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);

export default WeatherProvider;
