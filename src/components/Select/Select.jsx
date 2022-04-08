import "./Select.css";
import { v4 as uuidv4 } from "uuid";

function Select({ value, onChange, options }) {
  const selectOptions = options.map(({ currency }) => (
    <option value={currency} key={uuidv4()}>
      {currency}
    </option>
  ));

  return (
    <select value={value} onChange={onChange}>
      {selectOptions}
    </select>
  );
}

export default Select;
