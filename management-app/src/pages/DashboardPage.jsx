import SalesExpensesChart from "../components/charts/sales-expenses/SalesExpensesChart"
import LatestTransactions from "../components/latest-transactions/TransactionsHistory"
import TopSellingDashboard from "../components/top-selling-dashboard/TopSellingDashboard"
import { totalSalesMock } from "../mocks/totalsales"
import "./dashboard-page.css"
const DashboardPage = () => {
  return (
    <div className="dashboard__ctn">
      <main className="dashboard__main-ctn">
        <SalesExpensesChart period={"lastyear"} {...totalSalesMock} />
        <TopSellingDashboard />
      </main>
      <LatestTransactions />
    </div>
  )
}

export default DashboardPage
