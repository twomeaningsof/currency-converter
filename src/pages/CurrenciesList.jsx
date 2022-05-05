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
          <TableContent baseCurrency={baseCurrency} />
        </Tbody>
      </Table>
    </>
  );
}

export default CurrenciesListPage;
