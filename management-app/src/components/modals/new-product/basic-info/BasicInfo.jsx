import React from "react"
import { useContext } from "react"
import { NewProductContext } from "../../../../context/NewProductContext"
import CategorySelector from "../../../category-selector/CategorySelector"
import Input from "../../../input/Input"
import InputWithUnit from "../../../input/input-with-unit/InputWithUnit"
import PriceInput from "../../../input/price/PriceInput"
import SelectBox from "../../../input/select-box/SelectBox"
import ImageInput from "../image-input/ImageInput"
import "./BasicInfo.css"

const BasicInfo = () => {
	const { values, handleChange, categories, setCategories } =
		useContext(NewProductContext)
	const { name, quantity, price } = values

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
				<PriceInput
					handleChange={(value) => {
						handleChange({
							custom: true,
							name: "price",
							value,
						})
					}}
					value={price}
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
					label="Condition:"
					placeholder="Seleccionar.."
					callback={() => {}}
					width="200px"
					options={[
						{
							title: "Nuevo",
							value: "new",
						},
						{
							title: "Usado",
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
