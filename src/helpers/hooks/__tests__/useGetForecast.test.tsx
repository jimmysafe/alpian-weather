import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import useGetForecast from '../useGetForecast';

test('Checks for query: useGetForecast', async () => {
	const queryClient = new QueryClient();
	const wrapper = ({ children }: any) => (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);

	const { result, waitFor } = renderHook(() => useGetForecast(), {
		wrapper,
	});

	await waitFor(() => result.current.isSuccess, { timeout: 8000 });

	expect(result.current.data?.data).toBeTruthy();
});
