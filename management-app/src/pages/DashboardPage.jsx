import SalesExpensesChart from "../components/charts/sales-expenses/SalesExpensesChart"
import TransactionsHistory from "../components/transactions-history/TransactionsHistory"
import { totalSalesMock } from "../mocks/totalsales"
import "./dashboard-page.css"
const DashboardPage = () => {
  return (
    <div className="dashboard__ctn">
      <div>
        <SalesExpensesChart period={"lastyear"} {...totalSalesMock} />
      </div>
      <TransactionsHistory />
    </div>
  )
}

export default DashboardPage
