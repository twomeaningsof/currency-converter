import { useState } from "react";
import { routes } from "../constants/routes";
import Breadcrumbs from "../components/Breadcrumbs";
import Heading from "../components/Heading";
import Select from "../components/Select";
import Table, { Thead, Tr, Tbody, Td } from "../components/Table";
import TableContent from "../components/TableContent";

function CurrenciesListPage({ currencies }) {
  const [baseCurrency, setBaseCurrency] = useState("usd");
  const handleSelectChange = (event) => setBaseCurrency(event.target.value);

  return (
    <>
      <Breadcrumbs routes={routes.slice(0, 1)} />
      <Heading variant="h1">Currency converter</Heading>
      <div className="select-currency-wrapper">
        <Heading variant="h2">Choose base currency</Heading>
        <Select
          value={baseCurrency}
          onChange={handleSelectChange}
          options={currencies.map(({ currency }) => ({
            value: currency,
            label: currency,
          }))}
        />
      </div>
      <Table>
        <Thead>
          <Tr key={"head"}>
            <Td isHeader>Currency</Td>
            <Td isHeader isMiddle>
              Value
            </Td>
            <Td isHeader>Change</Td>
          </Tr>
        </Thead>
        <Tbody>
          <TableContent baseCurrency={baseCurrency} />
        </Tbody>
      </Table>
    </>
  );
}

export default CurrenciesListPage;
