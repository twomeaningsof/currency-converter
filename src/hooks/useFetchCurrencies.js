import { useState, useEffect } from "react";
import { getCurrencies } from "../api/getCurrencies";
import { mapDataToCurrencies } from "../utils/mapDataToCurrencies";

export function useFetchCurrencies() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      setCurrencies(mapDataToCurrencies(await getCurrencies()));
    };
    fetchCurrencies().catch(console.error);
  }, []);

  return currencies;
}
