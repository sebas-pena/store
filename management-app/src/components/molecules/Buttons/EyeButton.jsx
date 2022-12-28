import React from "react"
import Button from "../../atoms/Button/Button"
import { Eye } from "../../atoms/Icons"
const EyeButton = ({ ...props }) => {
	return (
		<Button {...props}>
			<Eye height="16" />
		</Button>
	)
}

export default EyeButton
