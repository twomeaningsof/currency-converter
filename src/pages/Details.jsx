import { useParams } from "react-router-dom";
import { routes } from "../constants/routes";
import Breadcrumbs from "../components/Breadcrumbs";
import Heading from "../components/Heading";
import Date from "../components/Date";
import DetailsPageContent from "../components/DetailContent";

function DetailsPage({ currencies }) {
  const { baseCurrency, secondCurrency } = useParams();

  return (
    <>
      <Breadcrumbs routes={routes} />
      <Heading variant="h1">Currency converter</Heading>
      <Heading variant="h2">Convert values</Heading>
      <Date date="2022-04-25" format="LL" />
      <DetailsPageContent
        currencies={currencies}
        baseCurrency={baseCurrency}
        secondCurrency={secondCurrency}
      />
    </>
  );
}

export default DetailsPage;
