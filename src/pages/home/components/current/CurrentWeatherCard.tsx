import Card from '../../../../components/common/elements/Card';
import Icon from '../../../../components/common/elements/Icon';
import { IWeatherData } from '../../../../helpers/models/Weather';
import WeatherCardInfoTag from '../../../../components/common/extensive/WeatherCardInfoTag';

type CurrentWeatherCardProps = {
	data: IWeatherData;
};

function CurrentWeatherCard({ data }: CurrentWeatherCardProps) {
	return (
		<Card className="p-6">
			{/* Card Title */}
			<h2 className="text-center text-gray-400">Current Weather</h2>

			{/* Icon & Temperature */}
			<div className="flex justify-evenly items-center flex-col mb-6">
				<Icon
					name={`weather/${data.weather[0].icon}`}
					size={130}
					accessibilityText={data.weather[0].description}
					className="my-4"
				/>
				<p className="text-5xl text-center">
					{Math.round(data.main.temp)}ºC
				</p>
			</div>

			{/* Weather Type */}
			<p className="text-center">{data.weather[0].main}</p>

			{/* Info Tags (min, max, humidity) */}
			<div className="flex flex-col justify-center items-center mt-4">
				<WeatherCardInfoTag
					type="max-temp"
					data={data.main.temp_max}
					className="my-2"
				/>
				<WeatherCardInfoTag
					type="min-temp"
					data={data.main.temp_min}
					className="my-2"
				/>
				<WeatherCardInfoTag
					type="humidity"
					data={data.main.humidity}
					className="my-2"
				/>
			</div>
		</Card>
	);
}

export default CurrentWeatherCard;
