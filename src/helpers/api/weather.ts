import { HttpClient } from "../client";

/**
 * Weather API is protected by CORS Policy.
 * Will be used heroku's corsanywhere proxy to bypass this problem.
 * @returns Weather API url with cors bypass
 */
const getUrl = (): string => {
  const weatherUrl = process.env.REACT_APP_WEATHER_API_BASE_URL!;
  const proxy = process.env.REACT_APP_WEATHER_PROXY;
  return `${proxy}/${weatherUrl}`;
};

export class WeatherApi extends HttpClient {
  public static readonly shared = new WeatherApi();

  public constructor() {
    super(getUrl(), {
      units: "metric",
      appid: process.env.REACT_APP_WEATHER_API_ACCESS_KEY,
    });
  }
}
