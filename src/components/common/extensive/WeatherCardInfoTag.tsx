import Icon from '../elements/Icon';

export type WeatherCardInfoTagType = 'humidity' | 'max-temp' | 'min-temp';

type WeatherCardInfoTagProps = {
	data: number;
	type: WeatherCardInfoTagType;
	className?: string;
	hideLabel?: boolean;
};

const getTag = (
	type: WeatherCardInfoTagType,
): { text: string; iconName: string; color: string } => {
	switch (type) {
		case 'min-temp':
			return {
				text: 'Min',
				iconName: 'arrow-down',
				color: 'text-blue-500',
			};

		case 'max-temp':
			return {
				text: 'Max',
				iconName: 'arrow-up',
				color: 'text-red-500',
			};
		default:
			return {
				text: 'Humidity',
				iconName: 'drop',
				color: 'text-blue-300',
			};
	}
};

function WeatherCardInfoTag({
	data,
	type,
	className,
	hideLabel,
}: WeatherCardInfoTagProps) {
	const { text, iconName, color } = getTag(type);

	return (
		<div className={`flex items-center ${className}`}>
			{!hideLabel && <p className="text-xs mr-2 text-gray-400">{text}</p>}
			<div className="flex items-center">
				<Icon
					name={iconName}
					size={17}
					accessibilityText={text}
					className={`${color} mr-2`}
				/>
				<p>
					{Math.round(data)}
					{type === 'humidity' ? '%' : 'ºC'}
				</p>
			</div>
		</div>
	);
}

export default WeatherCardInfoTag;
