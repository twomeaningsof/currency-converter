export const mapDataToAllCurrencies = (data) =>
  Object.keys(data).map((currency) => ({
    currency,
  }));
