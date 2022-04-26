import { renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "react-query";
import useGetCurrentWeather from "../useGetCurrentWeather";

test("Checks for query: useGetCurrentWeather", async () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: any) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const { result, waitFor } = renderHook(() => useGetCurrentWeather(), {
    wrapper,
  });

  await waitFor(() => result.current.isSuccess, { timeout: 8000 });

  expect(result.current.data?.data).toBeTruthy();
});
