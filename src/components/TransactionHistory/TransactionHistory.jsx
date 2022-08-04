import PropTypes from "prop-types";
import styles from './TransactionHistory.module.scss';

export const TransactionHistory = ({items}) => {
  const {transactions, headers__row, headers, headers__type, data__row, data, data__type} = styles;

  const headersType = `${headers} ${headers__type}`

  return (
    <table className={transactions}>
      <thead>
        <tr className={headers__row}>
          <th className={headersType}>Type</th>
          <th className={headers}>Amount</th>
          <th className={headers}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({id, type, amount, currency}) => (
          <tr key={id} className={data__row}>
            <td className={data__type}>{type}</td>
            <td className={data}>{amount}</td>
            <td className={data}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
}