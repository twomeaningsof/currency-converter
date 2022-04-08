import "./Heading.css";

function Heading({ variant, children }) {
  const Variant = variant;
  return <Variant>{children}</Variant>;
}

export default Heading;
