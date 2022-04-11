function Table({ currenciesTable }) {
  return (
    <table>
      <thead>
        <tr key={`head`}>
          <td>Currency</td>
          <td>Value</td>
          <td>Change</td>
        </tr>
      </thead>
      <tbody>
        {currenciesTable.map(({ name, value, change }) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{value}</td>
            <td>{change}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
