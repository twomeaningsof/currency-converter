import { useState, useEffect } from "react";
import { getBaseCurrencyRates } from "../api/getBaseCurrencyRates";
import { fetchWithErrorHandling } from "../utils/fetchWithErrorHandling";
import { mapDataToBaseCurrencyRates } from "../utils/mapDataToBaseCurrencyRates";

export function useFetchBaseCurrencyRates(baseCurrency) {
  const [rates, setRates] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRates = async () => {
      setLoading(true);
      const [data, error] = await fetchWithErrorHandling(
        async () => await getBaseCurrencyRates(baseCurrency)
      );
      const rates = mapDataToBaseCurrencyRates(data);
      setRates(rates);
      setError(error);
      setLoading(false);
    };
    fetchRates();
  }, [baseCurrency]);

  return {
    rates,
    loading,
    error,
  };
}
