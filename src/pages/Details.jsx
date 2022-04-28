import Breadcrumbs from "../components/Breadcrumbs";
import Heading from "../components/Heading";
import Select from "../components/Select";
import Input from "../components/Input";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSelectOptionsFromCurrencies } from "../utils/getSelectOptionsFromCurrencies";
import { routes } from "../constants/routes";

const getChange = (setUpArray, base, second) => {
  return [...setUpArray].find((setUp) => {
    return setUp.name === `${base}-${second}`;
  }).change;
};

const allCurrenciesSetUp = [
  { name: "USD-EUR", value: 1, change: 0.924 },
  { name: "USD-GBP", value: 1, change: 0.762 },
  { name: "USD-PLN", value: 1, change: 4.261 },
  { name: "PLN-EUR", value: 1, change: 0.215 },
  { name: "PLN-GBP", value: 1, change: 0.178 },
  { name: "PLN-USD", value: 1, change: 0.234 },
  { name: "EUR-PLN", value: 1, change: 4.641 },
  { name: "EUR-GBP", value: 1, change: 0.828 },
  { name: "EUR-USD", value: 1, change: 1.082 },
  { name: "GBP-EUR", value: 1, change: 1.204 },
  { name: "GBP-PLN", value: 1, change: 5.601 },
  { name: "GBP-USD", value: 1, change: 1.312 },
];

function DetailsPage({ currencies }) {
  const { baseCurrency, secondCurrency } = useParams();
  const upperCaseBaseCurrency = baseCurrency.toUpperCase();
  const upperCaseSecondCurrency = secondCurrency.toUpperCase();

  const [currentSetUp, setCurrentSetUp] = useState({
    base: upperCaseBaseCurrency,
    second: upperCaseSecondCurrency,
    change: getChange(
      allCurrenciesSetUp,
      upperCaseBaseCurrency,
      upperCaseSecondCurrency
    ),
    reversedChange: getChange(
      allCurrenciesSetUp,
      upperCaseSecondCurrency,
      upperCaseBaseCurrency
    ),
  });

  const [baseInputValue, setBaseInputValue] = useState(1);
  const [secondInputValue, setSecondInputValue] = useState(currentSetUp.change);
  const [selectValueFirstRow, setSelectValueFirstRow] = useState(
    upperCaseBaseCurrency
  );
  const [selectValueSecondRow, setSelectValueSecondRow] = useState(
    upperCaseSecondCurrency
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
    setSelectValueFirstRow(value);
    const newSetup = {
      ...currentSetUp,
      base: value,
      change: getChange(allCurrenciesSetUp, value, currentSetUp.second),
      reversedChange: getChange(allCurrenciesSetUp, currentSetUp.second, value),
    };
    setCurrentSetUp(newSetup);
  };

  const handleSelectChangeSecondRow = ({ target: { value } }) => {
    setSelectValueSecondRow(value);
    const newSetup = {
      ...currentSetUp,
      second: value,
      change: getChange(allCurrenciesSetUp, currentSetUp.base, value),
      reversedChange: getChange(allCurrenciesSetUp, value, currentSetUp.base),
    };
    setCurrentSetUp(newSetup);
  };

  useEffect(() => {
    setBaseInputValue(1);
    setSecondInputValue(1 * currentSetUp.change);
  }, [currentSetUp]);

  return (
    <>
      <Breadcrumbs routes={routes} />
      <Heading variant="h1">Currency converter</Heading>
      <Heading variant="h2">Convert values</Heading>
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

export default DetailsPage;
