import dayjs from "dayjs";
import Card from "../../../../components/common/elements/Card";
import Icon from "../../../../components/common/elements/Icon";
import { IForecastItem } from "../../../../helpers/models/Forecast";

type ForecastRowProps = {
  item: IForecastItem;
};

const ForecastRow = ({ item }: ForecastRowProps) => {
  return (
    <div className="md:w-1/6 w-1/3 p-1">
      <Card className="flex flex-col items-center justify-center border border-white">
        <div className="flex items-center">
          <Icon
            name="clock"
            accessibilityText="Time"
            size={16}
            className="text-gray-400 mr-1"
          />
          <p className="text-gray-400 text-sm font-thin">
            {dayjs(item.dt_txt).format("Ha")}
          </p>
        </div>
        <Icon
          name={`weather/${item.weather[0].icon}`}
          size={50}
          accessibilityText={item.weather[0].description}
          className="my-2"
        />
        <p className="text-xl text-center">{Math.round(item.main.temp)}ºC</p>
      </Card>
    </div>
  );
};

export default ForecastRow;
