function Heading(props) {
  const Variant = props.variant;
  return <Variant>{props.children}</Variant>;
}

export default Heading;
