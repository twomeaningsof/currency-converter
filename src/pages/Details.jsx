import { useParams } from "react-router-dom";
import { useState } from "react";
import { routes } from "../constants/routes";
import Breadcrumbs from "../components/Breadcrumbs";
import Heading from "../components/Heading";
import Date from "../components/Date";
import DetailsPageContent from "../components/DetailContent";
import { useFetchTwoCurrenciesRates } from "../hooks/useFetchTwoCurrenciesRates";

function DetailsPage({ currencies }) {
  const { baseCurrency, secondCurrency } = useParams();
  const [currentSetUp, setCurrentSetUp] = useState({
    base: baseCurrency,
    second: secondCurrency,
    change: 0,
    reversedChange: 0,
  });

  const { baseToSecondCurrencyRate, secondToBaseCurrencyRate, loading, error } =
    useFetchTwoCurrenciesRates(currentSetUp.base, currentSetUp.second);

  currentSetUp.change = baseToSecondCurrencyRate;
  currentSetUp.reversedChange = secondToBaseCurrencyRate;

  return (
    <>
      <Breadcrumbs routes={routes} />
      <Heading variant="h1">Currency converter</Heading>
      <div className="heading-date-wrapper">
        <Heading variant="h2">Convert values</Heading>
        <Date date="2022-04-25" format="LL" />
      </div>
      {error && <div className="info-element">{error.message}</div>}
      {loading && <div className="info-element">loading...</div>}
      {!(error || loading) ? (
        <div className="details-page-content-wrapper">
          <DetailsPageContent
            currencies={currencies}
            currentSetUp={currentSetUp}
            handleSelect={setCurrentSetUp}
          />
        </div>
      ) : null}
    </>
  );
}

export default DetailsPage;
