import Breadcrumbs from "../components/Breadcrumbs";
import Heading from "../components/Heading";
import Select from "../components/Select";
import Input from "../components/Input";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSelectOptionsFromCurrencies } from "../utils/getSelectOptionsFromCurrencies";
import { routes } from "../constants/routes";

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
  const [currentSetUp, setCurrentSetUp] = useState({
    base: "PLN",
    second: "USD",
    change: 0.234,
    reversedChange: 4.261,
  });

  const { currency } = useParams();
  const upperCaseCurrency = currency.toUpperCase();

  const [baseInputValue, setBaseInputValue] = useState(1);
  const [selectValueFirstRow, setSelectValueFirstRow] =
    useState(upperCaseCurrency);
  const [selectValueSecondRow, setSelectValueSecondRow] = useState(
    currency === "USD" ? "PLN" : "USD"
  );
  const [secondInputValue, setSecondInputValue] = useState(
    1 * currentSetUp.change
  );
  const handleBaseInputValueChange = (event) => {
    const value = event.target.value;
    setBaseInputValue(value);
    setSecondInputValue(value * currentSetUp.change);
  };
  const handleSecondInputValueChange = (event) => {
    const value = event.target.value;
    setSecondInputValue(value);
    setBaseInputValue(value * currentSetUp.reversedChange);
  };
  const handleSelectChangeFirstRow = (event) => {
    const value = event.target.value;
    setSelectValueFirstRow(value);
    const newSetup = { ...currentSetUp };
    newSetup.base = value;
    newSetup.change = [...allCurrenciesSetUp].find((setUp) => {
      return setUp.name === `${value}-${currentSetUp.second}`;
    }).change;
    newSetup.reversedChange = allCurrenciesSetUp.find((setUp) => {
      return setUp.name === `${currentSetUp.second}-${value}`;
    }).change;
    setCurrentSetUp(newSetup);
  };
  const handleSelectChangeSecondRow = (event) => {
    const value = event.target.value;
    setSelectValueSecondRow(value);
    const newSetup = { ...currentSetUp };
    newSetup.reversed = value;
    newSetup.change = [...allCurrenciesSetUp].find((setUp) => {
      return setUp.name === `${currentSetUp.base}-${value}`;
    }).change;
    newSetup.reversedChange = allCurrenciesSetUp.find((setUp) => {
      return setUp.name === `${value}-${currentSetUp.base}`;
    }).change;
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
