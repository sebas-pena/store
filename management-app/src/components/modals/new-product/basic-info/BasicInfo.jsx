import React from "react"
import { useContext } from "react"
import { NewProductContext } from "../../../../context/NewProductContext"
import { StoreContext } from "../../../../store/StoreProvider"
import CategorySelector from "../../../category-selector/CategorySelector"
import Input from "../../../input/Input"
import InputWithUnit from "../../../input/input-with-unit/InputWithUnit"
import SelectBox from "../../../input/select-box/SelectBox"
import ImageInput from "../image-input/ImageInput"
import "./BasicInfo.css"

const BasicInfo = () => {
	const { values, handleChange, categories, setCategories } =
		useContext(NewProductContext)
	const { name, quantity, price, condition } = values
	const { store } = useContext(StoreContext)
	const { allowedCurrencies } = store
	console.log({ allowedCurrencies })

	return (
		<div className="new-product__basic-info__ctn">
			<ImageInput
				images={values.images}
				handleChange={(images) =>
					handleChange({
						custom: true,
						name: "images",
						value: images,
					})
				}
			/>

			<div className="new-product-modal__basic-info__inputs-ctn">
				<Input
					width="200px"
					type="text"
					placeholder="Tip: Product + Brand + Model"
					label="Product name"
					name="name"
					onChange={handleChange}
					value={name}
				/>
				<InputWithUnit
					label="Price"
					unitsPosition="left"
					onChange={handleChange}
					units={allowedCurrencies}
					value={price}
					name="price"
				/>
				<Input
					width="200px"
					type="number"
					placeholder="Quantity"
					label="Quantity"
					name="quantity"
					min="0"
					onChange={handleChange}
					value={quantity}
				/>
				<SelectBox
					label="Condition"
					value={condition}
					name="condition"
					placeholder="Seleccionar.."
					onChange={handleChange}
					width="200px"
					options={[
						{
							name: "Nuevo",
							value: "new",
						},
						{
							name: "Usado",
							value: "used",
						},
					]}
				/>
			</div>
			<div className="new-product-modal__basic-info__inputs-ctn category">
				<CategorySelector handleChange={setCategories} value={categories} />
			</div>
		</div>
	)
}

export default BasicInfo
