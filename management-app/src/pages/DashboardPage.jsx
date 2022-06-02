import ChartTotalSales from "../components/charts/total-sales/ChartTotalSales"
import "./dashboard-page.css"
const DashboardPage = () => {
	return (
		<div className="dashboard__ctn">
			<div className="dashboard__total-sales-ctn">
				<ChartTotalSales period={"lastyear"} />
			</div>
		</div>
	)
}

export default DashboardPage
