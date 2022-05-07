import { useState, useEffect } from "react";
import { getTwoCurrenciesRate } from "../api/getTwoCurrenciesRate";
import { fetchWithErrorHandling } from "../utils/fetchWithErrorHandling";
import { mapDataToTwoCurrenciesRate } from "../utils/mapDataToTwoCurrenciesRate";

export function useFetchTwoCurrenciesRates(baseCurrency, secondCurrency) {
  const [baseToSecondCurrencyRate, setBaseToSecondCurrencyRate] = useState([]);
  const [secondToBaseCurrencyRate, setSecondToBaseCurrencyRate] = useState([]);
  const [errorBaseToSecond, setErrorBaseToSecond] = useState(null);
  const [errorSecondToBase, setErrorSecondToBase] = useState(null);
  const [anyError, setAnyError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchOneToSecondCurrencyRate = async (
      firstCurrency,
      secondCurrency,
      rateSetter,
      errorSetter
    ) => {
      const [data, error] = await fetchWithErrorHandling(() =>
        getTwoCurrenciesRate(firstCurrency, secondCurrency)
      );
      if (!error) {
        const firstToSecondCurrencyRate = mapDataToTwoCurrenciesRate(data);
        rateSetter(firstToSecondCurrencyRate);
      }
      errorSetter(error);
    };

    (async () => {
      await Promise.all([
        fetchOneToSecondCurrencyRate(
          baseCurrency,
          secondCurrency,
          setBaseToSecondCurrencyRate,
          setErrorBaseToSecond
        ),
        fetchOneToSecondCurrencyRate(
          secondCurrency,
          baseCurrency,
          setSecondToBaseCurrencyRate,
          setErrorSecondToBase
        ),
      ]);
      if (errorBaseToSecond) setAnyError(errorBaseToSecond);
      if (errorSecondToBase) setAnyError(errorSecondToBase);
      setLoading(false);
    })();
  }, [baseCurrency, secondCurrency]);

  return {
    baseToSecondCurrencyRate,
    secondToBaseCurrencyRate,
    loading,
    anyError,
  };
}
