const getRandomNumberBetween = (min, max) => {
  return Number(
    Math.floor(Math.random() * (max - min + 1)) + Math.random() + min
  ).toFixed(3);
};

const currencies = ["EUR", "PLN", "GBP", "USD"];

export const getMockCurrencies = (selectedCurrency) => {
  return currencies
    .filter((currency) => currency !== selectedCurrency)
    .map((currency) => ({
      name: `${selectedCurrency}-${currency}`,
      value: 1,
      change: getRandomNumberBetween(1, 5),
    }));
};
