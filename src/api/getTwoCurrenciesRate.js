import { apiUrl } from "../constants/apiUrl";

export const getTwoCurrenciesRate = async (base, second) =>
  await fetch(`${apiUrl}/currencies/${base}/${second}.json`);
