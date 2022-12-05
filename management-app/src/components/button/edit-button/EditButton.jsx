import React from "react"
import { ReactComponent as PenIcon } from "../../../assets/svg/pen.svg"
import Button from "../Button"

const EditButton = ({ onClick }) => {
	return (
		<Button onClick={onClick}>
			<PenIcon height="16" fill="#fff" />
		</Button>
	)
}

export default EditButton
