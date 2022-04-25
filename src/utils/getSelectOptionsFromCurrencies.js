export const getSelectOptionsFromCurrencies = ({ currencies, filterValue }) => {
  return currencies
    .map(({ currency }) => ({
      value: currency,
      label: currency,
    }))
    .filter(({ value }) => value !== filterValue);
};
