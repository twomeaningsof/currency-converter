import Heading from "../components/Heading";
import Select from "../components/Select";
import Input from "../components/Input";
import { useState } from "react";

function DetailsPage({ currencies }) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => setInputValue(event.target.value);

  const [selectValue, setSelectValue] = useState("");
  const handleSelectChange = (event) => setSelectValue(event.target.value);

  return (
    <>
      <Heading variant="h1">Currency converter</Heading>
      <Heading variant="h2">Convert values</Heading>
      <Input value={inputValue} onChange={handleInputChange} />
      <Select
        value={selectValue}
        onChange={handleSelectChange}
        options={currencies.map(({ currency }) => ({
          value: currency,
          label: currency,
        }))}
      />
    </>
  );
}

export default DetailsPage;
