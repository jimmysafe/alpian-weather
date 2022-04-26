import dayjs from 'dayjs';
import Card from '../../../../components/common/elements/Card';
import { useWeatherContext } from '../../../../context/weather.provider';
import { IFormattedForecastItem } from '../../../../helpers';

type DayProps = {
	forecast: IFormattedForecastItem;
};

function Day({ forecast }: DayProps) {
	const { selectedForecast, setSelectedForecast } = useWeatherContext();

	return (
		<button
			type="button"
			role="day"
			className="w-1/6 aspect-square p-1"
			onClick={() => setSelectedForecast(forecast)}
		>
			<Card
				className={`text-center border transition-all duration-200 ease-in-out md:p-4 p-2 ${
					selectedForecast?.date === forecast.date
						? 'border-blue-500'
						: 'border-white'
				} `}
			>
				<p className="text-xs text-gray-400 font-thin">
					{dayjs(forecast.date).format('ddd')}
				</p>
				<h3 className="md:text-2xl text-base">
					{dayjs(forecast.date).format('DD')}
				</h3>
				<p className="md:text-base text-sm text-gray-400">
					{dayjs(forecast.date).format('MMM')}
				</p>
			</Card>
		</button>
	);
}

export default Day;
