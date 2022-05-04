import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useFetchCurrencies } from "./hooks/useFetchCurrencies";
import CurrenciesListPage from "./pages/CurrenciesList";
import DetailsPage from "./pages/Details";

function App() {
  const { currencies, loading, error } = useFetchCurrencies();

  if (loading) return <div>loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<CurrenciesListPage currencies={currencies} />}
        />
        <Route
          path="/details/:baseCurrency/:secondCurrency"
          element={<DetailsPage currencies={currencies} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
