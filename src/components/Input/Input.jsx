import "./Input.css";

function Input({ value, onChange }) {
  return (
    <input
      type="number"
      min="0"
      value={value}
      onChange={onChange}
      className="input"
    />
  );
}

export default Input;
