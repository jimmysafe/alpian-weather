import { IFormattedForecastItem } from "../../../../helpers";
import Day from "./Day";

type DaysListProps = {
  forecasts: IFormattedForecastItem[];
};

const DaysList = ({ forecasts }: DaysListProps) => {
  return (
    <div className="flex md:mt-0 mt-4">
      {forecasts.map((forecast) => (
        <Day key={forecast.date} forecast={forecast} />
      ))}
    </div>
  );
};

export default DaysList;
