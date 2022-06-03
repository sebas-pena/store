import SalesExpensesChart from "../components/charts/sales-expenses/SalesExpensesChart"
import TransactionsHistory from "../components/transactions-history/TransactionsHistory"
import { totalSalesMock } from "../mocks/totalsales"
import "./dashboard-page.css"
const DashboardPage = () => {
	return (
		<div className="dashboard__ctn">
			<main className="dashboard__main-ctn">
				<SalesExpensesChart period={"lastyear"} {...totalSalesMock} />
			</main>
			<TransactionsHistory />
		</div>
	)
}

export default DashboardPage
