import { useState, useContext, useEffect } from "react"
import Pagination from "../../components/pagination/Pagination"

// mocks below
import { ordersMock } from "../../mocks/orders"
import FlexContainer from "../../components/atoms/Container/FlexContainer"
import Button from "../../components/atoms/Button/Button"
import Container from "../../components/atoms/Container/Container"
import Text from "../../components/atoms/Text/Text"
import SearchInput from "../../components/molecules/SearchInput/SearchInput"
import OrdersTable from "../../components/organisms/Tables/Orders/OrdersTable"
import ToggleOptions from "../../components/molecules/ToggleOptions"

const OrdersPage = () => {
	const [statusFilter, setStatusFilter] = useState("All")
	const [page, setPage] = useState(1)
	return (
		<FlexContainer
			as="main"
			gap={20}
			padding=" 10px 10px 20px 10px"
			flex={1}
			vertical
		>
			<FlexContainer justify="space-between" align="flex-end">
				<ToggleOptions
					onChange={setStatusFilter}
					value={statusFilter}
					label="Status:"
					options={["All", "Pending", "Completed"]}
				/>
				<FlexContainer gap={10}>
					<SearchInput placeholder="Order ID or Customer" />
				</FlexContainer>
			</FlexContainer>
			<OrdersTable orders={ordersMock} />
		</FlexContainer>
	)
}

export default OrdersPage
