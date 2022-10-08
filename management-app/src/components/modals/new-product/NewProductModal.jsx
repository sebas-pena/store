import { useState } from "react"
import Modal from "../Modal"
import Input from "../../input/Input"
import Button from "../../button/Button"
import TextArea from "../../input/TextArea"
import VariantsInput from "./variants-input/VariantsInput"
import ImageInput from "./image-input/ImageInput"
import { useForm } from "../../../hooks/useForm"
import "./NewProductModal.css"

const NewProductModal = ({ handleClose, submitCallback }) => {
	const [isClosed, setIsClosed] = useState(false)
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
		setIsClosed(true)
		setTimeout(() => {
			handleClose()
		}, 300)
	}
	const handleSubmit = () => {
		submitCallback({ ...values, images })
		handleCloseModal()
	}
	return (
		<Modal
			handleClose={handleCloseModal}
			isClosed={isClosed}
			setIsClosed={setIsClosed}
			showCross
		>
			<div className="new-product-modal__ctn">
				<header className="new-product-modal__header">
					<h1>New Product</h1>
				</header>
				<div
					className="new-product-modal__form"
					onSubmit={() => handleSubmit({ ...values, images })}
				>
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

					<div className="new-products-modal__buttons">
						<Button
							className="new-products-modal__submit"
							color="primary"
							onClick={handleSubmit}
							height="35px"
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
