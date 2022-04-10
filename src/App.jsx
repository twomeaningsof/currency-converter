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

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<CurrenciesListPage currencies={currencies} />}
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
