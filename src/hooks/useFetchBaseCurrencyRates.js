import { useState, useEffect } from "react";
import { getBaseCurrencyRates } from "../api/getBaseCurrencyRates";
import { fetchWithErrorHandling } from "../utils/fetchWithErrorHandling";
import { mapDataToBaseCurrencyRates } from "../utils/mapDataToBaseCurrencyRates";

export function useFetchBaseCurrencyRates(baseCurrency) {
  const [baseCurrencyRates, setBaseCurrencyRates] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRates = async () => {
      setLoading(true);
      const [data, error] = await fetchWithErrorHandling(() =>
        getBaseCurrencyRates(baseCurrency)
      );
      if (!error) {
        const baseCurrencyRates = mapDataToBaseCurrencyRates(data);
        setBaseCurrencyRates(baseCurrencyRates);
      }
      setError(error);
      setLoading(false);
    };
    fetchRates();
  }, [baseCurrency]);

  return {
    baseCurrencyRates,
    loading,
    error,
  };
}
