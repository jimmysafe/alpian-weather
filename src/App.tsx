import { QueryClient, QueryClientProvider } from "react-query";
import WeatherApp from "./components/WeatherApp";

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <WeatherApp />
    </QueryClientProvider>
  );
};

export default App;
