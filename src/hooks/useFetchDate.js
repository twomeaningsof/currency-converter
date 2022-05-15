import { useState, useEffect } from "react";
import { getBaseCurrencyRates } from "../api/getBaseCurrencyRates";
import { fetchWithErrorHandling } from "../utils/fetchWithErrorHandling";

export function useFetchDate(baseCurrency) {
  const [date, setDate] = useState(undefined);
  const [dateError, setDateError] = useState(null);
  const [dateLoading, setDateLoading] = useState(false);

  useEffect(() => {
    const fetchDate = async () => {
      setDateLoading(true);
      const [data, error] = await fetchWithErrorHandling(() =>
        getBaseCurrencyRates(baseCurrency)
      );
      if (!error) {
        const date = data["date"];
        setDate(date);
      }
      setDateError(error);
      setDateLoading(false);
    };
    fetchDate();
  }, [baseCurrency]);

  return {
    date,
    dateLoading,
    dateError,
  };
}
