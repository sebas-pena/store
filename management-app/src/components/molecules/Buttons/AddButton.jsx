import React from "react"
import Button from "../../atoms/Button/Button"
import FlexContainer from "../../atoms/Container/FlexContainer"
import { Plus } from "../../atoms/Icons"

const AddButton = ({ children, ...props }) => {
	return (
		<Button {...props}>
			<FlexContainer gap={5} align="center">
				<Plus height="16" fill="#fff" />
				{children}
			</FlexContainer>
		</Button>
	)
}

export default AddButton
