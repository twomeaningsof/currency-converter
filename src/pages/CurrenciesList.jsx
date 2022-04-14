import Heading from "../components/Heading";
import Select from "../components/Select";
import Table, { Thead, Tbody, Tr, Td } from "../components/Table";
import { useState } from "react";

function CurrenciesListPage({ currencies }) {
  const [selectValue, setSelectValue] = useState("");
  const handleSelectChange = (event) => setSelectValue(event.target.value);

  const currenciesForTable = [
    { name: "EUR-USD", value: 1, change: 0.341 },
    { name: "GBP-USD", value: 1, change: 1.231 },
    { name: "PLN-USD", value: 1, change: 1.666 },
  ];

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
      <Table>
        <Thead>
          <Tr key={"head"}>
            <Td variant="header">Currency</Td>
            <Td variant="header" isMiddle>
              Value
            </Td>
            <Td variant="header">Change</Td>
          </Tr>
        </Thead>
        <Tbody>
          {currenciesForTable.map(({ name, value, change }) => (
            <Tr key={name}>
              <Td variant="body">
                <div className="currency-comparison-cell-inside-wrapper">
                  <div>{name}</div>
                  <button className="details-vector"></button>
                </div>
              </Td>
              <Td variant="body" isMiddle>
                {value}
              </Td>
              <Td variant="body">{change}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}

export default CurrenciesListPage;
