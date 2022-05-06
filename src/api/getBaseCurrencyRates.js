import { apiUrl } from "../constants/apiUrl";

export const getBaseCurrencyRates = async (base) =>
  await fetch(`${apiUrl}/currencies/${base}.json`);
