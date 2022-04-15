import Heading from "../components/Heading";
import Select from "../components/Select";
import Input from "../components/Input";
import { useState } from "react";

function DetailsPage({ currencies }) {
  const [inputValueFirstRow, setInputValueFirstRow] = useState("");
  const handleInputChangeFirstRow = (event) =>
    setInputValueFirstRow(event.target.value);

  const [selectValueFirstRow, setSelectValueFirstRow] = useState("");
  const handleSelectChangeFirstRow = (event) =>
    setSelectValueFirstRow(event.target.value);

  const [inputValueSecondRow, setInputValueSecondRow] = useState("");
  const handleInputChangeSecondRow = (event) =>
    setInputValueSecondRow(event.target.value);

  const [selectValueSecondRow, setSelectValueSecondRow] = useState("");
  const handleSelectChangeSecondRow = (event) =>
    setSelectValueSecondRow(event.target.value);

  return (
    <>
      <Heading variant="h1">Currency converter</Heading>
      <Heading variant="h2">Convert values</Heading>
      <Input value={inputValueFirstRow} onChange={handleInputChangeFirstRow} />
      <Select
        value={selectValueFirstRow}
        onChange={handleSelectChangeFirstRow}
        options={currencies.map(({ currency }) => ({
          value: currency,
          label: currency,
        }))}
      />
      <Input
        value={inputValueSecondRow}
        onChange={handleInputChangeSecondRow}
      />
      <Select
        value={selectValueSecondRow}
        onChange={handleSelectChangeSecondRow}
        options={currencies.map(({ currency }) => ({
          value: currency,
          label: currency,
        }))}
      />
    </>
  );
}

export default DetailsPage;
