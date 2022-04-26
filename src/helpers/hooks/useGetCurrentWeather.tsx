import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getLondonCoordinates } from '..';
import { WeatherApi } from '../api/weather';
import { IWeatherData } from '../models/Weather';

const key = 'current';

const useGetCurrentWeather = () => {
	const fetchCurrentWeather = () =>
		WeatherApi.shared.get(
			`/weather?${new URLSearchParams(getLondonCoordinates())}`,
		);
	return useQuery<AxiosResponse<IWeatherData> | undefined>(
		[key],
		fetchCurrentWeather,
	);
};

export default useGetCurrentWeather;
