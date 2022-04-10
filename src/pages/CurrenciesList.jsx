import Heading from "../components/Heading";
import Select from "../components/Select";
import { useState } from "react";

function CurrenciesListPage({ currencies }) {
  const [selectValue, setSelectValue] = useState("");
  const handleSelectChange = (event) => setSelectValue(event.target.value);

  return (
    <>
      <Heading variant="h1">Currency converter</Heading>
      <Heading variant="h2">Choose base currency</Heading>
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

export default CurrenciesListPage;
