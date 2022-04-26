import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import Card from '../../../../components/common/elements/Card';
import WeatherCardInfoTag from '../../../../components/common/extensive/WeatherCardInfoTag';
import { IForecastItem } from '../../../../helpers/models/Forecast';

dayjs.extend(advancedFormat);

type ForecastHeaderProps = {
	date: string;
	data: IForecastItem[];
};

function ForecastHeader({ date, data }: ForecastHeaderProps) {
	const maxTemps = data.map((el) => Math.round(el.main.temp_max));
	const maxTemp = Math.max(...maxTemps);
	const minTemps = data.map((el) => Math.round(el.main.temp_min));
	const minTemp = Math.min(...minTemps);

	return (
		<Card className="md:mt-8 mt-4 mb-4 flex justify-between items-center">
			<h4 className="md:text-base text-xs text-gray-400 font-thin">
				{dayjs(date).format('dddd, Do MMMM YYYY')}
			</h4>
			<div className="flex">
				<WeatherCardInfoTag
					hideLabel
					type="max-temp"
					data={maxTemp}
					className="mx-2"
				/>
				<WeatherCardInfoTag
					hideLabel
					type="min-temp"
					data={minTemp}
					className="mx-2"
				/>
			</div>
		</Card>
	);
}

export default ForecastHeader;
