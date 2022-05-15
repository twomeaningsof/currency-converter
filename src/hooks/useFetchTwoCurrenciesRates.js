import { useState, useEffect } from "react";
import { getTwoCurrenciesRate } from "../api/getTwoCurrenciesRate";
import { fetchWithErrorHandling } from "../utils/fetchWithErrorHandling";
import { mapDataToTwoCurrenciesRate } from "../utils/mapDataToTwoCurrenciesRate";

export function useFetchTwoCurrenciesRates(baseCurrency, secondCurrency) {
  const [baseToSecondCurrencyRate, setBaseToSecondCurrencyRate] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOneToSecondCurrencyRate = async () => {
      setLoading(true);
      const [data, error] = await fetchWithErrorHandling(() =>
        getTwoCurrenciesRate(baseCurrency, secondCurrency)
      );
      if (!error) {
        const firstToSecondCurrencyRate = mapDataToTwoCurrenciesRate(data);
        setBaseToSecondCurrencyRate(firstToSecondCurrencyRate);
      }
      setError(error);
      setLoading(false);
    };
    fetchOneToSecondCurrencyRate();
  }, [baseCurrency, secondCurrency]);

  return {
    baseToSecondCurrencyRate,
    secondToBaseCurrencyRate: 1 / baseToSecondCurrencyRate,
    loading,
    error,
  };
}
