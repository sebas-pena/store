import React from "react"
import Container from "../../../atoms/Container/Container"
import TableContainer from "../../../atoms/Container/TableContainer"
import Text from "../../../atoms/Text/Text"
import OrderTableItem from "../../../molecules/TableItems/OrderTableItem"
import "./OrdersTable.css"

const OrdersTable = ({ orders = [] }) => {
	console.log(orders)
	return (
		<TableContainer className="orders-table">
			<thead>
				<Container as="tr" align="left">
					<th>
						<Text bold>Order ID</Text>
					</th>
					<th>
						<Text bold>Customer</Text>
					</th>
					<th>
						<Text bold>Payment</Text>
					</th>
					<th>
						<Text bold>Total</Text>
					</th>
					<th>
						<Text bold>Status</Text>
					</th>
					<th></th>
				</Container>
			</thead>
			<tbody>
				{orders.map((order) => (
					<OrderTableItem key={order.id} order={order} />
				))}
			</tbody>
		</TableContainer>
	)
}

export default OrdersTable
