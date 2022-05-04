import { useState, useEffect } from "react";
import { getCurrencies } from "../api/getCurrencies";
import { fetchWithErrorHandling } from "../utils/fetchWithErrorHandling";
import { mapDataToCurrencies } from "../utils/mapDataToCurrencies";

export function useFetchCurrencies() {
  const [currencies, setCurrencies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCurrencies = async () => {
      setLoading(true);
      const [data, error] = await fetchWithErrorHandling(getCurrencies);
      const currencies = mapDataToCurrencies(data);
      setCurrencies(currencies);
      setError(error);
      setLoading(false);
    };
    fetchCurrencies();
  }, []);

  return {
    currencies,
    loading,
    error,
  };
}
