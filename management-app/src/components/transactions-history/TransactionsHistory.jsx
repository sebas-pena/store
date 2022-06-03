import { parseTimestamp } from "../../helpers/parseTimestamp"

import { transactionsHistoryMock } from "../../mocks/transactionsHistory"
import "./transactions-history.css"

const TransactionsHistory = () => {
	return (
		<div className="transactions-history__ctn">
			<header className="transactions-history__header">
				<p>Transactions History</p>
			</header>
			<ul className="transactions-history__list">
				{transactionsHistoryMock.map((day, index) => {
					return (
						<li key={day.timestamp}>
							<header className="transactions-history__day">
								<p>{parseTimestamp.getMouthDayYear(day.timestamp)}</p>
							</header>
							<ul>
								{day.transactions.map((transaction) => {
									return (
										<li
											key={transaction.timestamp}
											className="transactions-history__item"
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

export default TransactionsHistory
