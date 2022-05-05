import { useState, useEffect } from "react";
import { getAllCurrencies } from "../api/getAllCurrencies";
import { fetchWithErrorHandling } from "../utils/fetchWithErrorHandling";
import { mapDataToAllCurrencies } from "../utils/mapDataToAllCurrencies";

export function useFetchAllCurrencies() {
  const [currencies, setCurrencies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCurrencies = async () => {
      setLoading(true);
      const [data, error] = await fetchWithErrorHandling(getAllCurrencies);
      if (!error) {
        const currencies = mapDataToAllCurrencies(data);
        setCurrencies(currencies);
      }
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
