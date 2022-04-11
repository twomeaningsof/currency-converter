import { BrowserRouter, Routes, Route } from "react-router-dom";

import CurrenciesListPage from "./pages/CurrenciesList";
import DetailsPage from "./pages/Details";

function App() {
  const currencies = [
    { currency: "USD" },
    { currency: "PLN" },
    { currency: "EUR" },
    { currency: "GBP" },
  ];

  const currenciesForTable = [
    { name: "EUR-USD", value: 1, change: 0.341 },
    { name: "GBP-USD", value: 1, change: 1.231 },
    { name: "PLN-USD", value: 1, change: 1.666 },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <CurrenciesListPage
              currencies={currencies}
              currenciesForTable={currenciesForTable}
            />
          }
        />
        <Route
          path="/details"
          element={<DetailsPage currencies={currencies} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
