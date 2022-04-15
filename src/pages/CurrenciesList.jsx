import Heading from "../components/Heading";
import Select from "../components/Select";
import Table, { Thead, Tbody, Tr, Td } from "../components/Table";
import { useState } from "react";

function CurrenciesListPage({ currencies }) {
  const currenciesForTableUSD = [
    { name: "USD-EUR", value: 1, change: 0.924 },
    { name: "USD-GBP", value: 1, change: 0.762 },
    { name: "USD-PLN", value: 1, change: 4.261 },
  ];

  const currenciesForTablePLN = [
    { name: "PLN-EUR", value: 1, change: 0.215 },
    { name: "PLN-GBP", value: 1, change: 0.178 },
    { name: "PLN-USD", value: 1, change: 0.234 },
  ];

  const currenciesForTableEUR = [
    { name: "EUR-PLN", value: 1, change: 4.641 },
    { name: "EUR-GBP", value: 1, change: 0.828 },
    { name: "EUR-USD", value: 1, change: 1.082 },
  ];

  const currenciesForTableGBP = [
    { name: "GBP-EUR", value: 1, change: 1.204 },
    { name: "GBP-PLN", value: 1, change: 5.601 },
    { name: "GBP-USD", value: 1, change: 1.312 },
  ];
  const [selectValue, setSelectValue] = useState("PLN");
  const [currencyList, setCurrencyList] = useState(currenciesForTablePLN);
  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
    if (selectValue === "PLN") setCurrencyList(currenciesForTablePLN);
    if (selectValue === "GBP") setCurrencyList(currenciesForTableGBP);
    if (selectValue === "USD") setCurrencyList(currenciesForTableUSD);
    if (selectValue === "EUR") setCurrencyList(currenciesForTableEUR);
  };

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
          {currencyList.map(({ name, value, change }) => (
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
