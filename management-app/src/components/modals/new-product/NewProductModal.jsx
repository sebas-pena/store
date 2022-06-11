import Modal from "../Modal"

import { ReactComponent as CloseIcon } from "../../../assets/svg/cross2.svg"
import "./NewProductModal.css"
import Input from "../../input/Input"
import Button from "../../button/Button"

const NewProductModal = ({ handleClose }) => {
	return (
		<Modal>
			<div className="new-product-modal__ctn">
				<button className="new-product-modal__close-btn" onClick={handleClose}>
					<CloseIcon width="14" height="14" fill="#404043" />
				</button>
				<header className="new-product-modal__header">
					<h1>New Product</h1>
				</header>
				<form className="new-product-modal__form">
					<label className="new-product-modal__images-input">
						<input type="file" name="images" />
					</label>
					<div className="new-product-modal__inputs-ctn">
						<Input type="text" placeholder="Name" name="name" />
						<label className="new-product-modal__description">
							<textarea name="description" placeholder="Description" />
						</label>
						<Input type="number" placeholder="Price" name="price" />
						<Input type="number" placeholder="Quantity" name="quantity" />
						<div className="new-product-modal__variants-ctn"></div>

						<Button color="primary" small onClick={handleClose}>
							Save
						</Button>
					</div>
				</form>
			</div>
		</Modal>
	)
}

export default NewProductModal
