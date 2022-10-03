import { useState } from "react"
import Modal from "../Modal"
import "./OrderDetailModal.css"
const OrderDetailModal = ({ handleClose, order }) => {
	const [isClosed, setIsClosed] = useState(false)
	const {
		customer,
		date,
		customerEmail,
		customerPhone,
		orderId,
		paymentMethod,
		products,
		status,
		total,
	} = order
	const handleCloseModal = () => {
		setIsClosed(true)
		setTimeout(() => {
			handleClose()
		}, 300)
	}
	return (
		<Modal
			handleClose={handleCloseModal}
			isClosed={isClosed}
			setIsClosed={setIsClosed}
			showCross
			maxWidth={500}
		>
			<div className="order-modal__ctn">
				<h2 className="order-modal__title">Order #{orderId}</h2>
				<div className="order-modal__customer-details">
					<p>Customer: {customer}</p>
					{customerEmail && <p>Email: {customerEmail}</p>}
					{customerPhone && <p>Phone: {customerPhone}</p>}
					<p>Status: {status}</p>
					<p>Date: {date.replaceAll("-", "/")}</p>
					<p>Payment method: {paymentMethod}</p>
				</div>
				<h3>Products:</h3>
				<div className="order-modal__products-ctn">
					{products.map((product) => (
						<div className="order-modal__products" key={product.id}>
							<img src={product.imgUrl} />
							<div>
								<p>{product.name}</p>
								<p>
									{`${product.currency}${product.unitPrice} x ${product.quantity}`}
								</p>
								<p>
									{`Total: ${product.currency}${
										product.unitPrice * product.quantity
									}`}
								</p>
							</div>
						</div>
					))}
				</div>
				<p className="order-modal__total">Total: {total}</p>
			</div>
		</Modal>
	)
}

export default OrderDetailModal
