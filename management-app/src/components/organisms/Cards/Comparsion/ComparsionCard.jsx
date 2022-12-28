import React from "react"
import FlexContainer from "../../../atoms/Container/FlexContainer"
import Text from "../../../atoms/Text/Text"
import Icons from "../../../atoms/Icons"
import CardWrapper from "../../../atoms/Container/CardWrapper"
import { useState } from "react"
import Switch from "../../../molecules/Switch/Switch"

const { Triangle } = Icons

const ComparsionCard = ({ title, value, percentage }) => {
	const [period, setPeriod] = useState("monthly")
	return (
		<CardWrapper maxWidth={220}>
			<div>
				<Text as="h2" color="#404043" size={18} bold>
					{title}
				</Text>
				<Switch
					name={title}
					removeBorder
					rigth={{
						label: "Monthly",
						value: "monthly",
					}}
					left={{
						label: "Daily",
						value: "daily",
					}}
					value={period}
					fontSize={13}
					onChange={(e) => {
						setPeriod(e.target.value)
					}}
				/>
			</div>
			<Text as="h2" color="#404043" size={25} heavy align="center">
				{value}
			</Text>
			<FlexContainer gap={5} justify="center">
				<Triangle
					fill={percentage > 0 ? "green" : "red"}
					width={14}
					point={percentage > 0 ? "up" : "down"}
				/>
				<Text size={14}>{percentage}%</Text>
				<Text color="#404043" size={14}>
					Prev. Period
				</Text>
			</FlexContainer>
		</CardWrapper>
	)
}

export default ComparsionCard
