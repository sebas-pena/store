import { ReactComponent as ShowIcon } from "../../assets/svg/eye.svg"
import Button from "../button/Button"
import "./OrderList.css"

const OrderList = ({ orders = [] }) => {
	orders = [
		{
			id: 1,
			orderId: "12345",
			customer: "John Doe",
			date: "2020-01-01",
			total: "$100.00",
			status: "pending",
			paymentMethod: "Credit Card",
		},
		{
			id: 2,
			orderId: "12346",
			customer: "Johnnn Doe",
			date: "2020-01-01",
			total: "$100.00",
			status: "cancelled",
			paymentMethod: "Cash",
		},
		{
			id: 3,
			orderId: "12347",
			customer: "Johnnn Doeee",
			date: "2020-01-01",
			total: "$100.00",
			status: "completed",
			paymentMethod: "Cash",
		},
	]

	return (
		<table className="order-list__ctn">
			<thead className="order-list__header">
				<tr>
					<th>Order Id</th>
					<th>Customer</th>
					<th>Payment</th>
					<th>Total</th>
					<th>Status</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{orders.map((order) => (
					<tr className="order-list__item" key={order.id}>
						<td>{order.id}</td>
						<td>{order.customer}</td>
						<td>{order.paymentMethod}</td>
						<td>{order.total}</td>
						<td className={`order-list__item-status ${order.status}`}>
							{order.status}
						</td>
						<td>
							<Button small color="secondary">
								<ShowIcon
									className="order-list__icon"
									width="16"
									height="16"
									fill="#fff"
								/>
							</Button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default OrderList
