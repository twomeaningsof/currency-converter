import Heading from "../components/Heading";
import Select from "../components/Select";
import Table, { Thead, Tbody, Tr, Td } from "../components/Table";
import { useState } from "react";

function CurrenciesListPage({ currencies, currenciesForTable }) {
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
      <Table>
        <Thead>
          <Tr key={"head"}>
            <Td className="header-cell">Currency</Td>
            <Td className="header-cell middle-cell">Value</Td>
            <Td className="header-cell">Change</Td>
          </Tr>
        </Thead>
        <Tbody>
          {currenciesForTable.map(({ name, value, change }) => (
            <Tr key={name}>
              <Td className="body-cell currency-comparison-cell">
                <div className="currency-comparison-cell-inside-wrapper">
                  <div>{name}</div>
                  <button className="details-vector"></button>
                </div>
              </Td>
              <Td className="body-cell middle-cell">{value}</Td>
              <Td className="body-cell">{change}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}

export default CurrenciesListPage;
