import BestSellerDashboard from "../components/best-seller-dashboard/BestSellerDashboard"
import SalesExpensesChart from "../components/charts/sales-expenses/SalesExpensesChart"
import LatestTransactions from "../components/latest-transactions/TransactionsHistory"
import { totalSalesMock } from "../mocks/totalsales"
import "./dashboard-page.css"
const DashboardPage = () => {
  return (
    <div className="dashboard__ctn">
      <main className="dashboard__main-ctn">
        <SalesExpensesChart period={"lastyear"} {...totalSalesMock} />
        <BestSellerDashboard />
      </main>
      <LatestTransactions />
    </div>
  )
}

export default DashboardPage
