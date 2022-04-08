import Heading from "./components/Heading";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);

  return (
    <>
      <Heading variant="h1">Currency converter</Heading>
      <Heading variant="h2">Choose base currency</Heading>
      <Heading variant="h2">Convert values</Heading>
      <Input value={value} onChange={handleChange} />
    </>
  );
}

export default App;
