import css from './transactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.tableTh}>Type</th>
          <th className={css.tableTh}>Amount</th>
          <th className={css.tableTh}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.tableItem}>
              <td className={css.tableTd}>{type}</td>
              <td className={css.tableTd}>{amount}</td>
              <td className={css.tableTd}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
