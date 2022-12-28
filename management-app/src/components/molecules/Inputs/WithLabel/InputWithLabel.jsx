import React from "react"
import FlexContainer from "../../../atoms/Container/FlexContainer"
import Text from "../../../atoms/Text/Text"
import "./InputWithLabel.css"

const InputWithLabel = ({ label, width, ...props }) => {
	return (
		<FlexContainer
			gap={10}
			vertical
			inline
			className="input-with-label"
			as="label"
			width={width}
		>
			<Text color="#333" size={14} bold>
				{label}
			</Text>
			<input {...props} />
		</FlexContainer>
	)
}

export default InputWithLabel
