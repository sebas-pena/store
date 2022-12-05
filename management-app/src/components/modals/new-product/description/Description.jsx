import React, { useContext } from "react"
import { NewProductContext } from "../../../../context/NewProductContext"
import StyledText from "../../../styled-text/StyledText"
import "./Description.css"
const Description = () => {
	const { values, handleChange } = useContext(NewProductContext)
	const { description } = values
	return (
		<div className="new-product-modal__description-ctn">
			<StyledText semiBold size={22} mb={0}>
				Descripcion
			</StyledText>
			<textarea
				name="description"
				className="new-product-modal__description"
				spellCheck="false"
				onChange={handleChange}
				value={description}
			></textarea>
		</div>
	)
}

export default Description
