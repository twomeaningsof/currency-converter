import "./Table.css";

function Table({ children, ...props }) {
  return (
    <div className="table-wrapper">
      <table {...props}>{children}</table>
    </div>
  );
}

export default Table;

export function Thead({ children, ...props }) {
  return <thead {...props}>{children}</thead>;
}

export function Tbody({ children, ...props }) {
  return <tbody {...props}>{children}</tbody>;
}

export function Tr({ children, ...props }) {
  return <tr {...props}>{children}</tr>;
}

export function Td({ variant, isMiddle, isInfo, children, ...props }) {
  const variantClassName = variant === "header" ? "header-cell" : "body-cell";
  const middleClassName = isMiddle ? "middle-cell" : "";
  const infoClassName = isInfo ? "info-cell" : "";

  return (
    <td
      className={`${infoClassName} ${middleClassName} ${variantClassName}`}
      {...props}
    >
      {children}
    </td>
  );
}
