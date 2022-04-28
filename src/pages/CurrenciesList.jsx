import Breadcrumbs from "../components/Breadcrumbs";
import Heading from "../components/Heading";
import Select from "../components/Select";
import Table, { Thead, Tbody, Tr, Td } from "../components/Table";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getMockCurrencies } from "../utils/getMockCurrencies";
import { routes } from "../constants/routes";

function CurrenciesListPage({ currencies }) {
  const [baseCurrency, setBaseCurrency] = useState("PLN");
  const currencyList = getMockCurrencies(baseCurrency);

  const handleSelectChange = (event) => setBaseCurrency(event.target.value);

  return (
    <>
      <Breadcrumbs routes={routes.slice(0, 1)} />
      <Heading variant="h1">Currency converter</Heading>
      <Heading variant="h2">Choose base currency</Heading>
      <Select
        value={baseCurrency}
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
                  <Link
                    to={`/details/${baseCurrency.toLowerCase()}/${name
                      .split("-")[1]
                      .toLowerCase()}`}
                  >
                    <div className="details-vector"></div>
                  </Link>
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
