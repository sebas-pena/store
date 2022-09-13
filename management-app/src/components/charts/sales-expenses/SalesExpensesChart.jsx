import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"

import "./SalesExpensesChart.css"

const SalesExpensesChart = ({ labels, incomes, expenses }) => {
	BarElement.prototype.constructor.defaults.borderRadius = 3
	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	)

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "none",
			},
			tooltip: {
				backgroundColor: "#FFF",
				titleSize: 16,
				titleColor: "#404244",
				bodyColor: "#404244",
				bodySize: 14,
				displayColors: false,
				borderColor: "#d7d7d7",
				borderWidth: 1,
				padding: 10,
				/* callbacks: {
					labelTextColor: (param) =>
						param.dataset.label == "Income"
							? "rgba(53, 162, 235, 0.7)"
							: "rgba(255, 99, 132, 0.7)",
				}, */
			},
		},
		scales: {
			x: {
				grid: {
					display: false,
					drawBorder: false,
					drawOnChartArea: false,
					drawTicks: false,
				},
			},
			y: {
				grid: {
					display: false,
					drawBorder: false,
					color: "#00000010",
				},
				ticks: {
					display: false,
				},
			},
		},
	}

	const data = {
		labels,
		datasets: [
			{
				label: "Income",
				data: incomes,
				backgroundColor: "rgba(53, 162, 235, 0.7)",
			},
			{
				label: "Expenses",
				data: expenses,
				backgroundColor: "rgba(255, 99, 132, 0.7)",
			},
		],
	}

	return (
		<div className="sales-expenses-chart__ctn">
			<h2 className="sales-expenses-chart__title">Summary</h2>
			<p className="sales-expenses-chart__balance">$12,345.12</p>
			<p className="sales-expenses-chart__profit">$123456</p>
			<div className="sales-expenses-chart__info">
				<span>Incomes</span>
				<span>Expenses</span>
			</div>
			<div className="sales-expenses-chart__chart">
				<Bar options={options} data={data} />
			</div>
		</div>
	)
}

export default SalesExpensesChart
