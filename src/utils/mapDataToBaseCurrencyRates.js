export const mapDataToBaseCurrencyRates = (data) => {
  const selectedCurrency = Object.keys(data)[1];
  return Object.entries(data[selectedCurrency])
    .filter(([currency]) => currency !== selectedCurrency)
    .map(([currency, rate]) => ({
      name: `${selectedCurrency}-${currency}`,
      value: 1,
      change: rate,
    }));
};
