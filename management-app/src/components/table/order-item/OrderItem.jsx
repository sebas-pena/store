import { useState } from "react"
import { ReactComponent as ShowIcon } from "../../../assets/svg/eye.svg"
import Button from "../../button/Button"
import OrderDetailModal from "../../modals/order-detail/OrderDetailModal"
import StyledText from "../../styled-text/StyledText"
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
		<tr className="order-item">
			<td className="order-item__id">
				<StyledText size="16px" semiBold>
					#{order.id}
				</StyledText>
			</td>
			<td>
				<StyledText size="16px" semiBold>
					{order.customer}
				</StyledText>
				<StyledText size="12px" color="#808080">
					#{order.customerId}
				</StyledText>
			</td>
			<td>
				<StyledText size="16px" semiBold>
					{order.paymentMethod}
				</StyledText>
			</td>
			<td>
				<StyledText size="16px" semiBold>
					{order.total}
				</StyledText>
			</td>
			<td className={`order-item__status ${order.status}`}>
				<span>{order.status}</span>
			</td>
			<td>
				<Button
					height="35px"
					predefinedStyle="primary"
					onClick={handleShowModal}
				>
					<ShowIcon width="16" height="16" fill="#fff" />
				</Button>
			</td>
			{showModal && (
				<OrderDetailModal order={order} handleClose={handleClose} />
			)}
		</tr>
	)
}

export default OrderItem
