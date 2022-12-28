import { useContext, useEffect, useState } from "react"
import SalesExpensesChart from "../../components/charts/sales-expenses/SalesExpensesChart"
import { StoreContext } from "../../store/StoreProvider"

// svgs , css and images below
import "./DashboardPage.css"

// mocks below
import { totalSalesMock } from "../../mocks/totalsales"
import BestSelling from "../../components/organisms/BestSelling/BestSelling"
import FlexContainer from "../../components/atoms/Container/FlexContainer"
import ComparsionCard from "../../components/organisms/Cards/Comparsion/ComparsionCard"
import SalesChannels from "../../components/organisms/PurcharseChannelsChart/PurcharseChannelChart.jsx/SalesChannerls"
import Text from "../../components/atoms/Text/Text"
import Switch from "../../components/molecules/Switch/Switch"

const DashboardPage = () => {
	const { dispatch } = useContext(StoreContext)
	const [salesPeriod, setSalesPeriod] = useState("monthly")
	useEffect(() => {
		dispatch({ type: "SET_TITLE", payload: "Dashboard" })
	}, [])

	return (
		<FlexContainer
			flex={1}
			vertical
			overflow="auto"
			background="#f4f4f4"
			padding={20}
			as="main"
			gap={20}
		>
			<Text size={25} as="h2">
				General
			</Text>
			<FlexContainer gap={20} height={340}>
				<FlexContainer vertical gap={10} width={200} shrink={0}>
					<ComparsionCard title="New Sales" value="128k" percentage={9} />
					<ComparsionCard title="New Customers" value="128k" percentage={-9} />
				</FlexContainer>
				<SalesExpensesChart period={"lastyear"} {...totalSalesMock} flex={1} />
				<BestSelling />
			</FlexContainer>
			<FlexContainer gap={20} align="flex-end">
				<Text size={25} as="h2">
					Sales Channels
				</Text>
				<Switch
					name="sales-channels"
					rigth={{
						label: "Monthly",
						value: "monthly",
					}}
					left={{
						label: "Daily",
						value: "daily",
					}}
					removeBorder
					value={salesPeriod}
					fontSize={13}
					onChange={(e) => {
						setSalesPeriod(e.target.value)
					}}
				/>
			</FlexContainer>
			<FlexContainer gap={20} height={340}>
				<SalesChannels title="Orders" values={[100, 50, 300]} showPercentage />
				<SalesChannels title="Items" values={[500, 200, 390]} showPercentage />
				<SalesChannels
					title="Revenue"
					values={[2000, 6000, 5200]}
					symbol="$"
					showPercentage
				/>
			</FlexContainer>
		</FlexContainer>
	)
}

export default DashboardPage
