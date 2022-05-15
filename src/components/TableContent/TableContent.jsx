import { Link } from "react-router-dom";
import { Tr, Td } from "../Table";
import { useFetchBaseCurrencyRates } from "../../hooks/useFetchBaseCurrencyRates";

function TableContent({ baseCurrency }) {
  const { baseCurrencyRates, loading, error } =
    useFetchBaseCurrencyRates(baseCurrency);
  const showCurrencyRates = baseCurrencyRates.length > 0;

  if (error) {
    return (
      <Tr>
        <Td variant="" isInfo>
          {error.message}
        </Td>
      </Tr>
    );
  }

  if (loading) {
    return (
      <Tr>
        <Td isInfo>loading...</Td>
      </Tr>
    );
  }

  return showCurrencyRates ? (
    <>
      {baseCurrencyRates.map(({ name, value, change }) => {
        const secondaryCurrency = name.split("-")[1];
        return (
          <Tr key={name}>
            <Td>
              <div className="currency-comparison-cell-inside-wrapper">
                <div>{name}</div>
                <Link to={`/details/${baseCurrency}/${secondaryCurrency}`}>
                  <div className="details-vector"></div>
                </Link>
              </div>
            </Td>
            <Td isMiddle>{value}</Td>
            <Td>{change}</Td>
          </Tr>
        );
      })}
    </>
  ) : null;
}

export default TableContent;
