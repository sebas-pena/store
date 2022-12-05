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

const NewProductModal = ({ handleClose }) => {
	const { token, allowedCurrencies, integersSeparator, decimalSeparator } =
		useContext(StoreContext).store
	const [attributes, setAttributes] = useState({
		required: [],
		optional: [],
	})
	const [isClosed, setIsClosed] = useState(false)
	const [step, setStep] = useState(1)
	const [categories, setCategories] = useState([])
	const [attributesSelected, setAttributedSelected] = useState([])

	const { handleChange, values } = useForm({
		name: "",
		description: "",
		price: {
			value: 0,
			unit: allowedCurrencies[0],
		},
		quantity: "",
		images: [],
	})
	const {
		handleChange: handleChangeAttribute,
		values: attributesValues,
		resetForm: resetAttributes,
	} = useForm({})
	console.log({ values, attributesValues })

	useEffect(() => {
		if (categories.length) {
			const lastCategory = categories[categories.length - 1]
			fetch(
				`https://api.mercadolibre.com/categories/${lastCategory.id}/attributes`
			)
				.then((res) => res.json())
				.then((data) => {
					const optional = []
					const required = []
					data.forEach((attribute) => {
						if (attribute.id === "ITEM_CONDITION") return
						const {
							hint = "",
							name,
							id,
							tooltip,
							value_type,
							tags,
							default_unit,
							allowed_units = [],
							values = [],
						} = attribute
						if (
							attribute.tags["catalog_required"] ||
							attribute.tags["required"]
						) {
							required.push({
								hint,
								title: name,
								id,
								tooltip,
								value_type,
								tags,
								default_unit,
								allowed_units: allowed_units.map(({ id, name }) => {
									return { id, symbol: name }
								}),
								values,
							})
						} else {
							optional.push({
								hint,
								title: name,
								id,
								tooltip,
								value_type,
								tags,
								default_unit,
								allowed_units: allowed_units.map(({ id, name }) => {
									return { id, symbol: name }
								}),
								values,
							})
						}
					})
					setAttributes({
						required,
						optional,
					})
				})
		}
	}, [categories])

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

		const formData = new FormData()
		const imagesResult = await Promise.all(
			values.images.map((image) => resizedImageURL(image, 500, 500))
		)
		console.log({ imagesResult })
		imagesResult.forEach((image, i) => {
			formData.append(`${name}-${i}`, image, `${name}-${i}.png`)
		})

		let data = JSON.parse(
			JSON.stringify({
				...values,
				categories,
				attributes: attributesValues,
			})
		)

		const parsedPrice = Number(
			parseFloat(
				data.price.value
					.replaceAll(integersSeparator, "")
					.replace(decimalSeparator, ".")
			).toFixed(data.price.unit.decimal_places)
		)
		data.price.value = parsedPrice
		data.quantity = parseInt(data.quantity)
		delete data.images
		data = new Blob([JSON.stringify(data)], {
			type: "application/json",
		})
		formData.set("data", data, "form-data.json")
		fetchAstro("product", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		})
			.then((res) => console.log(res))
			.catch((err) => err.json())
			.then((res) => console.log(res))
		// handleCloseModal()
	}
	return (
		<NewProductContext.Provider
			value={{
				values,
				handleChange,
				categories,
				setCategories,
				handleChangeAttribute,
				attributesValues,
				attributesSelected,
				setAttributedSelected,
				attributes,
				setAttributes,
			}}
		>
			<Modal
				handleClose={handleCloseModal}
				isClosed={isClosed}
				setIsClosed={setIsClosed}
				showCross
				width={900}
				height={420}
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
						{step === 1 && <BasicInfo values={values} />}
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
