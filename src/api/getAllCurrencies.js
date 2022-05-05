import { apiUrl } from "../constants/apiUrl";

export const getAllCurrencies = async () =>
  await fetch(`${apiUrl}/currencies.json`);
