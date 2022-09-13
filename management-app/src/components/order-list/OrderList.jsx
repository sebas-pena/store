import OrderItem from "./order-item/OrderItem"
import "./OrderList.css"

const OrderList = ({ orders = [] }) => {
	return (
		<table className="order-list__ctn">
			<thead className="order-list__header">
				<tr>
					<th>Order #</th>
					<th>Customer</th>
					<th>Payment</th>
					<th>Total</th>
					<th>Status</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{orders.map((order) => (
					<OrderItem order={order} key={order.id} />
				))}
			</tbody>
		</table>
	)
}

export default OrderList
