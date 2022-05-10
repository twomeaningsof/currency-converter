import { useState, useEffect } from "react";
import { useFetchTwoCurrenciesRates } from "../../hooks/useFetchTwoCurrenciesRates";
import { getSelectOptionsFromCurrencies } from "../../utils/getSelectOptionsFromCurrencies";
import Input from "../Input";
import Select from "../Select";

export function DetailsPageContent({
  currencies,
  baseCurrency,
  secondCurrency,
}) {
  const { baseToSecondCurrencyRate, secondToBaseCurrencyRate, loading, error } =
    useFetchTwoCurrenciesRates(baseCurrency, secondCurrency);

  const [currentSetUp, setCurrentSetUp] = useState({
    base: baseCurrency,
    second: secondCurrency,
    change: baseToSecondCurrencyRate,
    reversedChange: secondToBaseCurrencyRate,
  });

  const [baseInputValue, setBaseInputValue] = useState(1);
  const [secondInputValue, setSecondInputValue] = useState(currentSetUp.change);
  const [selectValueFirstRow, setSelectValueFirstRow] = useState(
    currentSetUp.base
  );
  const [selectValueSecondRow, setSelectValueSecondRow] = useState(
    currentSetUp.second
  );

  const handleBaseInputValueChange = ({ target: { value } }) => {
    setBaseInputValue(value);
    setSecondInputValue(value * currentSetUp.change);
  };

  const handleSecondInputValueChange = ({ target: { value } }) => {
    setSecondInputValue(value);
    setBaseInputValue(value * currentSetUp.reversedChange);
  };

  const handleSelectChangeFirstRow = ({ target: { value } }) => {
    //To be handled in the issue #21
    // setSelectValueFirstRow(value);
    // const newSetup = {
    //   ...currentSetUp,
    //   base: value,
    //   change: getChange(allCurrenciesSetUp, value, currentSetUp.second),
    //   reversedChange: getChange(allCurrenciesSetUp, currentSetUp.second, value),
    // };
    // setCurrentSetUp(newSetup);
  };

  const handleSelectChangeSecondRow = ({ target: { value } }) => {
    //To be handled in the issue #21
    // setSelectValueSecondRow(value);
    // const newSetup = {
    //   ...currentSetUp,
    //   second: value,
    //   change: getChange(allCurrenciesSetUp, currentSetUp.base, value),
    //   reversedChange: getChange(allCurrenciesSetUp, value, currentSetUp.base),
    // };
    // setCurrentSetUp(newSetup);
  };

  useEffect(() => {
    setBaseInputValue(1);
    setSecondInputValue(1 * currentSetUp.change);
  }, [currentSetUp]);

  useEffect(() => {
    setCurrentSetUp({
      base: baseCurrency,
      second: secondCurrency,
      change: baseToSecondCurrencyRate,
      reversedChange: secondToBaseCurrencyRate,
    });
  }, [
    baseToSecondCurrencyRate,
    secondToBaseCurrencyRate,
    baseCurrency,
    secondCurrency,
  ]);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Input value={baseInputValue} onChange={handleBaseInputValueChange} />
      <Select
        value={selectValueFirstRow}
        onChange={handleSelectChangeFirstRow}
        options={getSelectOptionsFromCurrencies({
          currencies,
          filterValue: selectValueSecondRow,
        })}
      />
      <Input value={secondInputValue} onChange={handleSecondInputValueChange} />
      <Select
        value={selectValueSecondRow}
        onChange={handleSelectChangeSecondRow}
        options={getSelectOptionsFromCurrencies({
          currencies,
          filterValue: selectValueFirstRow,
        })}
      />
    </>
  );
}
