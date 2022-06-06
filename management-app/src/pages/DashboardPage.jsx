import BestSellerDashboard from "../components/best-seller-dashboard/BestSellerDashboard"
import Cards from "../components/cards/Cards"
import SalesExpensesChart from "../components/charts/sales-expenses/SalesExpensesChart"
import LatestTransactions from "../components/latest-transactions/TransactionsHistory"
import { totalSalesMock } from "../mocks/totalsales"
import "./dashboard-page.css"
const DashboardPage = () => {
  return (
    <div className="dashboard__ctn">
      <main className="dashboard__main-ctn">
        <div className="dashboard__chart">
          <SalesExpensesChart period={"lastyear"} {...totalSalesMock} />
        </div>
        <div className="dashboard__best-seller">
          <BestSellerDashboard />
        </div>
        <div className="dashboard__cards-1">
          <Cards />
          <Cards />
        </div>
        <div className="dashboard__cards-2">
          <Cards />
          <Cards />
        </div>
      </main>
      <LatestTransactions />
    </div>
  )
}

export default DashboardPage
