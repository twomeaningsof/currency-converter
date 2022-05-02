import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CurrenciesListPage from "./pages/CurrenciesList";
import DetailsPage from "./pages/Details";
import { getCurrencies } from "./api/getCurrencies";
import { mapDataToCurrencies } from "./utils/mapDataToCurrencies";

function App() {
  const [data, setData] = useState({ currencies: [], isLoaded: false });

  useEffect(() => {
    const fetchCurrencies = async () => {
      setData({
        currencies: mapDataToCurrencies(await getCurrencies()),
        isLoaded: true,
      });
    };
    fetchCurrencies().catch(console.error);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<CurrenciesListPage currencies={data.currencies} />}
        />
        <Route
          path="/details/:baseCurrency/:secondCurrency"
          element={<DetailsPage currencies={data.currencies} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
