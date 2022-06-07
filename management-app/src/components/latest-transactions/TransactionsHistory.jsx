import { parseTimestamp } from "../../helpers/parseTimestamp"

import { transactionsHistoryMock } from "../../mocks/transactionsHistory"
import { ReactComponent as CashIcon } from "../../assets/svg/cash.svg"
import { ReactComponent as CardIcon } from "../../assets/svg/card.svg"
import "./TransactionsHistory.css"

const paymentMethodsIcons = {
  cash: <CashIcon width="24" />,
  card: <CardIcon width="24" />,
}

const LatestTransactions = () => {
  return (
    <div className="latest-transactions__ctn">
      <header className="latest-transactions__header">
        <p>Latest Transactions</p>
      </header>
      <ul className="latest-transactions__list">
        {transactionsHistoryMock.map((day, index) => {
          return (
            <li key={day.timestamp}>
              <header className="latest-transactions__day">
                <p>{parseTimestamp.getMouthDayYear(day.timestamp)}</p>
              </header>
              <ul className="latest-transactions__day-list">
                {day.transactions.map((transaction) => {
                  return (
                    <li
                      key={transaction.timestamp}
                      className={`latest-transactions__item ${transaction.type}`}
                    >
                      {paymentMethodsIcons[transaction.method]}
                      <div className="latest-transactions__item-info">
                        <p className="latest-transactions__item-local">
                          {transaction.local}
                        </p>
                        <p className="latest-transactions__item-time">
                          {parseTimestamp.getTime12(transaction.timestamp)}
                        </p>
                      </div>
                      <p className="latest-transactions__item-amount">
                        ${transaction.currency + " " + transaction.amount}
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
