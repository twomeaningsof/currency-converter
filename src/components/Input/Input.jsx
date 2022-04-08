import "./Input.css";

function Input({ value, onChange }) {
  return <input value={value} onChange={onChange} className="input" />;
}

export default Input;
