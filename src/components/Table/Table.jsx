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

export function Td({ className, children }) {
  return <td className={className}>{children}</td>;
}
