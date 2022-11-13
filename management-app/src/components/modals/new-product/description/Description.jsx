import React from "react"
import StyledText from "../../../styled-text/StyledText"
import "./Description.css"
const Description = () => {
	return (
		<div className="new-product-modal__description-ctn">
			<StyledText semiBold size={22} mb={0}>
				Descripcion
			</StyledText>
			<textarea
				className="new-product-modal__description"
				spellCheck="false"
			></textarea>
		</div>
	)
}

export default Description
