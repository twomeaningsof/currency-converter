import "./Input.css";

function Input({ value, setValue }) {
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="input"
    />
  );
}

export default Input;
