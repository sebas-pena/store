import { useState } from "react"

import { ReactComponent as ShowIcon } from "../../../assets/svg/eye.svg"
import Button from "../../button/Button"
import OrderDetailModal from "../../modals/order-detail/OrderDetailModal"
import "./OrderItem.css"

const OrderItem = ({ order }) => {
	const [showModal, setShowModal] = useState(false)

	const handleShowModal = () => {
		setShowModal(true)
	}
	const handleClose = () => {
		setShowModal(false)
	}

	return (
		<>
			<tr className="order-item" key={order.id}>
				<td>#{order.id}</td>
				<td>
					<p>{order.customer}</p>
					<p className="order-item__customer-id">#{order.customerId}</p>
				</td>
				<td>{order.paymentMethod}</td>
				<td>{order.total}</td>
				<td className={`order-item__status ${order.status}`}>
					<span>{order.status}</span>
				</td>
				<td>
					<Button height="35px" color="primary" onClick={handleShowModal}>
						<ShowIcon width="16" height="16" fill="#fff" />
					</Button>
				</td>
			</tr>
			{showModal && (
				<OrderDetailModal order={order} handleClose={handleClose} />
			)}
		</>
	)
}

export default OrderItem
