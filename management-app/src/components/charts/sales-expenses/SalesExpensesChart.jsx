import { BarElement } from "chart.js"
import { Bar } from "react-chartjs-2"
import CardWrapper from "../../atoms/Container/CardWrapper"
import FlexContainer from "../../atoms/Container/FlexContainer"
import Text from "../../atoms/Text/Text"

import "./SalesExpensesChart.css"

const SalesExpensesChart = ({ labels, incomes, expenses, width, flex }) => {
	BarElement.prototype.constructor.defaults.borderRadius = 3
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
		<CardWrapper width={width}>
			<div>
				<Text as="h2" color="#404043" size={18} bold>
					Balance
				</Text>
				<Text as="h2" color="#404043" size={25} heavy>
					$12,345.12
				</Text>
			</div>
			<Text as="h2" color="#119E2F" size={18}>
				$123456
			</Text>
			<div className="sales-expenses-chart__info">
				<span>Incomes</span>
				<span>Expenses</span>
			</div>
			<div className="sales-expenses-chart__chart">
				<Bar options={options} data={data} />
			</div>
		</CardWrapper>
	)
}

export default SalesExpensesChart
