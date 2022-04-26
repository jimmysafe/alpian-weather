import { QueryClient, QueryClientProvider } from 'react-query';
import WeatherProvider from './context/weather.provider';
import HomePage from './pages/home/home.page';

export const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnReconnect: false,
			retry: false,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={client}>
			<WeatherProvider>
				<HomePage />
			</WeatherProvider>
		</QueryClientProvider>
	);
}

export default App;
