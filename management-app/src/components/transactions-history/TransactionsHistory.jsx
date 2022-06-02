import { transactionsHistoryMock } from "../../mocks/transactionsHistory"
import "./transactions-history.css"

const TransactionsHistory = () => {
  console.log(transactionsHistoryMock)
  const [, transaction] = transactionsHistoryMock
  console.log(new Date(transaction.timestamp).getDate())
  return (
    <div className="transactions-history__ctn">
      <header className="transactions-history__header">
        <p>Transactions History</p>
      </header>
      <ul className="transactions-history__list">{}</ul>
    </div>
  )
}

export default TransactionsHistory
