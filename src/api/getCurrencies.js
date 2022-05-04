import { apiUrl } from "../constants/apiUrl";

export const getCurrencies = async () =>
  await fetch(`${apiUrl}/currencies.json`);
