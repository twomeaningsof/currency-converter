import "./Select.css";

function Select({ options, ...props }) {
  return (
    <select {...props}>
      {options.map(({ value, label }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default Select;
