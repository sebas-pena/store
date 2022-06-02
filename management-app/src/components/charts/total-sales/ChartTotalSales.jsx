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
const ChartTotalSales = () => {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	)

	const labels = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
	]

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
		},
	}

	const data = {
		labels,
		datasets: [
			{
				label: "Income",
				data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
				backgroundColor: "rgba(53, 162, 235, 0.7)",
			},
			{
				label: "Outcome",
				data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
				backgroundColor: "rgba(255, 99, 132, 0.7)",
			},
		],
	}

	return (
		<div>
			<Bar options={options} data={data} />
		</div>
	)
}

export default ChartTotalSales
