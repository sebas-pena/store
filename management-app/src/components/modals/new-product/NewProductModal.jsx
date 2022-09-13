import { useState, useRef } from "react"
import Modal from "../Modal"

import { ReactComponent as CloseIcon } from "../../../assets/svg/cross2.svg"
import "./NewProductModal.css"
import Input from "../../input/Input"
import Button from "../../button/Button"
import TextArea from "../../input/TextArea"
import VariantsInput from "./variants-input/VariantsInput"
import { useForm } from "../../../hooks/useForm"
import ImageInput from "./image-input/ImageInput"

const NewProductModal = ({ handleClose, submitCallback }) => {
	const modalCtnRef = useRef(null)
	const [showVariantsForm, setShowVariantsForm] = useState(false)
	const [images, setImages] = useState([])
	const { handleChange, values } = useForm({
		name: "",
		description: "",
		price: "",
		quantity: "",
		variants: [],
		category: "",
	})
	const { name, description, price, quantity, variants, category } = values
	const handleCloseModal = () => {
		let modalCtn = modalCtnRef.current
		modalCtn.classList.add("close")
		setTimeout(() => {
			handleClose()
		}, 300)
	}
	const toggleShowVariants = () => {
		setShowVariantsForm(!showVariantsForm)
	}
	const handleSubmit = () => {
		submitCallback({ ...values, images })
		handleCloseModal()
	}
	return (
		<Modal>
			<div ref={modalCtnRef} className="new-product-modal__ctn">
				<button
					className="new-product-modal__close-btn"
					onClick={handleCloseModal}
				>
					<CloseIcon width="14" height="14" fill="#404043" />
				</button>
				<header className="new-product-modal__header">
					<h1>New Product</h1>
				</header>
				<div
					className="new-product-modal__form"
					onSubmit={() => handleSubmit({ ...values, images })}
				>
					{!showVariantsForm ? (
						<>
							<ImageInput images={images} setImages={setImages} />

							<div className="new-product-modal__inputs-ctn">
								<Input
									type="text"
									placeholder="Product name"
									name="name"
									onChange={handleChange}
									value={name}
								/>
								<Input
									type="number"
									placeholder="Price"
									name="price"
									min="0"
									onChange={handleChange}
									value={price}
								/>
								<Input
									type="number"
									placeholder="Quantity"
									name="quantity"
									min="0"
									onChange={handleChange}
									value={quantity}
								/>
								<Input
									type="text"
									placeholder="Category"
									name="category"
									onChange={handleChange}
									value={category}
								/>
							</div>
							<div className="new-product-modal__inputs-ctn">
								<TextArea
									name="description"
									placeholder="Description"
									onChange={handleChange}
									value={description}
								/>
							</div>
						</>
					) : (
						<VariantsInput />
					)}
					<div className="new-products-modal__buttons">
						<Button
							color="gray"
							small
							onClick={toggleShowVariants}
							type="button"
						>
							{showVariantsForm ? "Back" : "Add variants"}
						</Button>
						<Button
							className="new-products-modal__submit"
							color="primary"
							onClick={handleSubmit}
							small
							type="submit"
						>
							Create Product
						</Button>
					</div>
				</div>
			</div>
		</Modal>
	)
}

export default NewProductModal
