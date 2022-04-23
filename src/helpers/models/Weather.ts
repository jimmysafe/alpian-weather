export interface IWeatherItem {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeatherData {
  coord: {
    lon: number;
    lat: number;
  };
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
  sys: {
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
}
