export const mapDataToCurrencies = (data) =>
  Object.keys(data).map((currency) => ({
    currency: currency,
  }));
