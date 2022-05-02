import { endpoint } from "../constants/endpoint";

export const getCurrencies = async () => {
  try {
    const response = await fetch(`${endpoint}.json`);

    const data = await response.json();

    return data;
  } catch (err) {
    console.log("problemik");
  }
};
