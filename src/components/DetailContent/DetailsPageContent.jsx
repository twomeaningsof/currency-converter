import { useState, useEffect } from "react";
import { getSelectOptionsFromCurrencies } from "../../utils/getSelectOptionsFromCurrencies";
import Input from "../Input";
import Select from "../Select";

export function DetailsPageContent({ currencies, currentSetUp, handleSelect }) {
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
    handleSelect({ ...currentSetUp, base: value });
    setSelectValueFirstRow(value);
  };

  const handleSelectChangeSecondRow = ({ target: { value } }) => {
    handleSelect({ ...currentSetUp, second: value });
    setSelectValueSecondRow(value);
  };

  useEffect(() => {
    setBaseInputValue(1);
    setSecondInputValue(1 * currentSetUp.change);
  }, [currentSetUp]);

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
