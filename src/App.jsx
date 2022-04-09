import Heading from "./components/Heading";
import Input from "./components/Input";
import Select from "./components/Select";

import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => setInputValue(event.target.value);

  const [selectValue, setSelectValue] = useState("");
  const handleSelectChange = (event) => setSelectValue(event.target.value);

  const currencies = [
    { currency: "USD" },
    { currency: "PLN" },
    { currency: "EUR" },
    { currency: "GBP" },
  ];

  return (
    <>
      <Heading variant="h1">Currency converter</Heading>
      <Heading variant="h2">Choose base currency</Heading>
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

export default App;
