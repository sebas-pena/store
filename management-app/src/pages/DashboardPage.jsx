import BestSellerDashboard from "../components/best-seller-dashboard/BestSellerDashboard"
import Cards from "../components/cards/Cards"
import SalesExpensesChart from "../components/charts/sales-expenses/SalesExpensesChart"
import LatestTransactions from "../components/latest-transactions/TransactionsHistory"
import { totalSalesMock } from "../mocks/totalsales"

import { ReactComponent as TruckIcon } from "../assets/svg/truck.svg"
import { ReactComponent as CartIcon } from "../assets/svg/cart2.svg"
import "./DashboardPage.css"

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
          <Cards background="0">
            <TruckIcon width="80" height="80" fill="#fff" />
            <h3>Next Order</h3>
            <p> 20m 20s</p>
          </Cards>
          <Cards background="1">
            <CartIcon width="80" height="80" fill="#fff" />
            <h3>Sold Today</h3>
            <p>1200 items</p>
          </Cards>
        </div>
        <div className="dashboard__cards-2">
          <Cards background="2" />
          <Cards background="3" />
        </div>
      </main>
      <LatestTransactions />
    </div>
  )
}

export default DashboardPage
