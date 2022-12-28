import React from "react"
import CardWrapper from "../../../atoms/Container/CardWrapper"
import Text from "../../../atoms/Text/Text"
import { Pie } from "react-chartjs-2"
import DivContainer from "../../../atoms/Container/DivContainer"

const SalesChannels = ({
	title,
	values = [0, 0, 0],
	description,
	symbol,
	showPercentage,
}) => {
	const total = values.reduce((x, y) => x + y, 0)
	const data = {
		labels: ["Mercado Libre", "E-commerce", "Amazon"],
		datasets: [
			{
				data: values,
				backgroundColor: [
					"rgba(255, 206, 86, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255, 206, 86, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
				callbacks: "yes",
			},
		],
	}
	const options = {
		plugins: {
			legend: {
				labels: {
					boxWidth: 10,
					boxHeight: 10,
				},
				position: "bottom",
			},
			tooltip: {
				backgroundColor: "#FFF",
				titleSize: 16,
				titleColor: "#404244",
				footerColor: "#404244",
				footerAlign: "center",
				bodyColor: "#404244",
				bodySize: 14,
				displayColors: false,
				borderColor: "#d7d7d7",
				borderWidth: 1,
				padding: 10,
				callbacks: {
					label: function ({ label, formattedValue }) {
						return symbol
							? `${label} : ${symbol} ${formattedValue}`
							: `${label} : ${formattedValue}`
					},
					footer: function (context) {
						const value = context[0].parsed
						const percentage = Math.round(((value * 100) / total) * 100) / 100
						if (showPercentage) return `%${percentage}`
					},
				},
			},
		},
	}
	return (
		<CardWrapper>
			<DivContainer margin="0 0 20px 0">
				<Text as="h2" color="#404043" size={18} bold>
					{title}
				</Text>
				<Text color="#404043" size={16} thin>
					{description}
				</Text>
			</DivContainer>
			<Pie width="100%" data={data} options={options} />
		</CardWrapper>
	)
}

export default SalesChannels
