import "./Table.css";

function Table({ children }) {
  return <table>{children}</table>;
}

export default Table;

export function Thead({ children }) {
  return <thead>{children}</thead>;
}

export function Tbody({ children }) {
  return <tbody>{children}</tbody>;
}

export function Tr({ key, children }) {
  return <tr key={key}>{children}</tr>;
}

export function Td({ variant, isMiddle, isCurrencyComparison, children }) {
  const variantClassName = variant === "header" ? "header-cell" : "body-cell";
  const middleClassName = isMiddle ? "middle-cell" : "";
  const currencyComparisonClassName = isCurrencyComparison
    ? "currency-comparison-cell"
    : "";

  return (
    <td
      className={`${middleClassName} ${variantClassName} ${currencyComparisonClassName}`}
    >
      {children}
    </td>
  );
}
