import { parseTimestamp } from "../../helpers/parseTimestamp"

import { transactionsHistoryMock } from "../../mocks/transactionsHistory"
import "./latesttransactions.css"

const LatestTransactions = () => {
  return (
    <div className="latest-transactions__ctn">
      <header className="latest-transactions__header">
        <p>Lastest Transactions</p>
      </header>
      <ul className="latest-transactions__list">
        {transactionsHistoryMock.map((day, index) => {
          return (
            <li key={day.timestamp}>
              <header className="latest-transactions__day">
                <p>{parseTimestamp.getMouthDayYear(day.timestamp)}</p>
              </header>
              <ul>
                {day.transactions.map((transaction) => {
                  return (
                    <li
                      key={transaction.timestamp}
                      className="latest-transactions__item"
                    >
                      <p>{transaction.type === "income" ? "+" : "-"}</p>
                      <p>
                        Amount: $
                        {transaction.currency + " " + transaction.amount}
                      </p>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}{" "}
      </ul>
    </div>
  )
}

export default LatestTransactions
