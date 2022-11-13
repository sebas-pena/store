import { useState, useRef, useContext } from "react"
import Modal from "../Modal"
import Button from "../../button/Button"
import { useForm } from "../../../hooks/useForm"
import "./NewProductModal.css"
import { resizedImageURL } from "../../../helpers/resizeImageFile"
import fetchAstro from "../../../helpers/fetchAstro"
import { StoreContext } from "../../../store/StoreProvider"
import BasicInfo from "./basic-info/BasicInfo"
import AttributesSection from "./attributes/AttributesSection"
import { NewProductContext } from "../../../context/NewProductContext"
import { useEffect } from "react"
import Description from "./description/Description"

const NewProductModal = ({ handleClose, submitCallback }) => {
	const { store } = useContext(StoreContext)
	const { token } = store
	const [isClosed, setIsClosed] = useState(false)
	const [images, setImages] = useState([])
	const [step, setStep] = useState(1)
	const [categories, setCategories] = useState([])
	const [attributesSelected, setAttributedSelected] = useState([])

	const { handleChange, values } = useForm({
		name: "",
		description: "",
		price: { price: 0, currency: {} },
		quantity: "",
		images: [],
	})
	const {
		handleChange: handleChangeAttribute,
		values: attributesValues,
		resetForm: resetAttributes,
	} = useForm({})
	console.log({ values, attributesValues })
	const { name } = values
	const handleCloseModal = () => {
		setIsClosed(true)
		setTimeout(() => {
			handleClose()
		}, 300)
	}
	useEffect(() => {
		resetAttributes()
		setAttributedSelected([])
	}, [categories])
	const formRef = useRef()
	const handleSubmit = async (e) => {
		e.preventDefault()
		const data = new FormData(formRef.current)
		const imagesResult = await Promise.all(
			images.map((image) => resizedImageURL(image, 500, 500))
		)
		data.delete("images")
		imagesResult.forEach((image, i) => {
			data.append(`image-${i}`, image, `${name}-${i}.png`)
		})
		data.append("price")
		console.log(data)
		fetchAstro("product", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: data,
		})
			.then((res) => console.log(res))
			.catch((err) => err.json())
			.then((res) => console.log(res))
		// submitCallback({ ...values, images })
		// handleCloseModal()
	}
	return (
		<NewProductContext.Provider
			value={{
				values,
				handleChange,
				setImages,
				images,
				categories,
				setCategories,
				handleChangeAttribute,
				attributesValues,
				attributesSelected,
				setAttributedSelected,
			}}
		>
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
					<form
						ref={formRef}
						className="new-product-modal__form"
						onSubmit={handleSubmit}
					>
						{step === 1 && (
							<BasicInfo
								setImages={setImages}
								images={images}
								values={values}
							/>
						)}
						{step === 2 && (
							<AttributesSection category={categories[categories.length - 1]} />
						)}
						{step === 3 && <Description />}
						<div className="new-products-modal__buttons">
							{step > 1 && (
								<Button
									predefinedStyle="grey"
									type="button"
									height="35px"
									onClick={() => {
										setStep(step - 1)
									}}
								>
									Back
								</Button>
							)}
							{step < 3 && categories.length ? (
								<Button
									predefinedStyle="primary"
									type="button"
									height="35px"
									onClick={() => {
										setStep(step + 1)
									}}
								>
									{step === 1 ? "Add Attributes" : "Add Description"}
								</Button>
							) : (
								false
							)}
							{step === 3 && (
								<Button
									className="new-products-modal__submit"
									predefinedStyle="primary"
									type="submit"
									height="35px"
								>
									Create Product
								</Button>
							)}
						</div>
					</form>
				</div>
			</Modal>
		</NewProductContext.Provider>
	)
}

export default NewProductModal
