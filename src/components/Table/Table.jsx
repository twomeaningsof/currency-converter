import "./Table.css";

function Table({ currenciesForTable }) {
  return (
    <table>
      <thead>
        <tr key={`head`}>
          <td className="header-cell">Currency</td>
          <td className="header-cell middle-cell">Value</td>
          <td className="header-cell">Change</td>
        </tr>
      </thead>
      <tbody>
        {currenciesForTable.map(({ name, value, change }) => (
          <tr key={name}>
            <td className="body-cell currency-comparison-cell">
              <div className="currency-comparison-cell-inside-wrapper">
                <div>{name}</div>
                <button className="details-vector"></button>
              </div>
            </td>
            <td className="body-cell middle-cell">{value}</td>
            <td className="body-cell">{change}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
