import SalesExpensesChart from "../components/charts/sales-expenses/SalesExpensesChart"
import { totalSalesMock } from "../mocks/totalsales"
import "./dashboard-page.css"
const DashboardPage = () => {
  return (
    <div className="dashboard__ctn">
      <SalesExpensesChart period={"lastyear"} {...totalSalesMock} />
    </div>
  )
}

export default DashboardPage
