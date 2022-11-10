export const TransactionHistory = ({ items }) => {
  const transactionsData = items.map(item => (
    <tr>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  ));
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{transactionsData}</tbody>
    </table>
  );
};
