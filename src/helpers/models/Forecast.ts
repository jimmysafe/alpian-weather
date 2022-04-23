import { IWeatherItem } from "./Weather";

export interface IForecastItem {
  weather: IWeatherItem[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  dt: number;
}

export interface IForecastData {
  city: {
    coord: {
      lon: number;
      lat: number;
    };
    country: string;
    timezone: number;
    id: number;
    name: string;
  };
  list: IForecastItem[];
}
