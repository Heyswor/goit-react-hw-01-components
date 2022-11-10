import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  const transactionsData = items.map(item => (
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  ));
  return (
    <table className="transaction-history">
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

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
