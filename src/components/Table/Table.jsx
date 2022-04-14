import "./Table.css";

function Table({ children, ...props }) {
  return <table {...props}>{children}</table>;
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

export function Td({ variant, isMiddle, children, ...props }) {
  const variantClassName = variant === "header" ? "header-cell" : "body-cell";
  const middleClassName = isMiddle ? "middle-cell" : "";

  return (
    <td className={`${middleClassName} ${variantClassName}`} {...props}>
      {children}
    </td>
  );
}
