import dayjs from "dayjs";
import { useWeatherContext } from "../../../context/weather.provider";
import Button from "../elements/Button";

type ReloadButtonProps = {
  onReload: () => void;
};

const ReloadButton = ({ onReload }: ReloadButtonProps) => {
  const { isOnline } = useWeatherContext();

  return (
    <div className="flex justify-end items-end mb-6">
      {!isOnline && (
        <p className="text-sm text-gray-400">
          Last updated on:{" "}
          {dayjs(JSON.parse(localStorage.getItem("lastUpdate")!)).format(
            "DD/MM/YYYY H:mma"
          )}
        </p>
      )}
      <Button
        iconName="reload"
        disabled={!isOnline}
        onClick={onReload}
        className="bg-blue-500 px-4 py-2 ml-4 rounded-md text-white text-sm font-thin transform hover:scale-[105%] duration-200"
      >
        Reload
      </Button>
    </div>
  );
};

export default ReloadButton;
