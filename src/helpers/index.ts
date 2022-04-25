import dayjs from "dayjs";
import { IForecastItem } from "./models/Forecast";

/**
 * Get London, UK,  geo location (lat, lon)
 * @returns coordinates
 */
export const getLondonCoordinates = (): Record<string, string> => ({
  lat: "51.5085",
  lon: "-0.1257",
});

export interface IFormattedForecastItem {
  date: string;
  data: IForecastItem[];
}

/**
 * Formats forecast fetched data to the shape needed for carousel sections
 * @param list IForecastItem[]
 * @returns Record<string, IForecastItem[]>
 */
export const formatForecastData = (
  list: IForecastItem[]
): IFormattedForecastItem[] => {
  // Filter all list by their Dates
  const allDates = list.map((item) => dayjs(item.dt_txt).format("YYYY-MM-DD"));

  // Make an array of only uniques Dates
  const uniqueDates = [...new Set(allDates)];

  // Create an array of IFormattedForecastItem
  const formattedArray: IFormattedForecastItem[] = uniqueDates.map((date) => ({
    date,
    data: [],
  }));

  // Populate array Data
  list.forEach((item) => {
    const itemDate = dayjs(item.dt_txt).format("YYYY-MM-DD");
    const foundIndex = formattedArray.findIndex(
      (item) => item.date === itemDate
    );
    if (foundIndex !== -1) formattedArray[foundIndex].data.push(item);
  });

  return formattedArray;
};
