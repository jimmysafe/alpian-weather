import { useEffect, useState } from 'react';
import Container from '../../components/common/elements/Container';
import useGetCurrentWeather from '../../helpers/hooks/useGetCurrentWeather';
import CurrentWeatherCard from './components/current/CurrentWeatherCard';
import { formatForecastData, IFormattedForecastItem } from '../../helpers';
import useGetForecast from '../../helpers/hooks/useGetForecast';
import { useWeatherContext } from '../../context/weather.provider';
import DaysList from './components/days/DaysList';
import ForecastList from './components/forecast/ForecastList';
import LocationHeader from '../../components/common/extensive/LocationHeader';
import ReloadButton from '../../components/common/extensive/ReloadButton';
import Loading from '../../components/common/generic/Loading';
import Error from '../../components/common/generic/Error';

function HomePage() {
	const { setSelectedForecast } = useWeatherContext();
	const [forecasts, setForecasts] = useState<IFormattedForecastItem[]>([]);
	const {
		data: currentWeather,
		refetch: refetchCurrent,
		isFetching: isFetchingCurrent,
		isLoading: isLoadingCurrent,
		error: currentError,
	} = useGetCurrentWeather();
	const {
		data: forecastData,
		refetch: refetchForecast,
		isFetching: isFetchingForecast,
		isLoading: isLoadingForecast,
		error: forecastError,
	} = useGetForecast();

	const refetch = () => {
		refetchCurrent();
		refetchForecast();
		localStorage.setItem('lastUpdate', JSON.stringify(new Date()));
	};

	useEffect(() => {
		if (forecastData?.data && forecastData.data.list.length > 0) {
			const formattedData = formatForecastData(forecastData.data.list);
			setForecasts(formattedData);
			setSelectedForecast(formattedData[0]);
			localStorage.setItem('lastUpdate', JSON.stringify(new Date()));
		}
	}, [forecastData, setSelectedForecast]);

	if (forecastError || currentError)
		return <Error error={forecastError || currentError} />;

	if (
		!currentWeather ||
		isLoadingCurrent ||
		isLoadingForecast ||
		isFetchingCurrent ||
		isFetchingForecast
	)
		return <Loading />;
	console.log('test husky');
	return (
		<main className="py-14 px-2">
			<Container className="lg:w-[65%] md:w-full">
				<LocationHeader location={currentWeather.data.name} />
				<ReloadButton onReload={refetch} />
				<main className="flex md:flex-row flex-col items-start justify-center lg:gap-10 md:gap-4">
					<div className="md:w-1/3 w-full">
						<CurrentWeatherCard data={currentWeather.data} />
					</div>
					<section className="md:w-2/3 w-full flex flex-col ">
						<DaysList forecasts={forecasts} />
						<ForecastList />
					</section>
				</main>
			</Container>
		</main>
	);
}

export default HomePage;
