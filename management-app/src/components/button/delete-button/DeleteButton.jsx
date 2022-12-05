import React from "react"
import { ReactComponent as TrashIcon } from "../../../assets/svg/trash.svg"
import Button from "../Button"

const DeleteButton = ({ onClick }) => {
	return (
		<Button predefinedStyle="danger" onClick={onClick} padding="0 10px">
			<TrashIcon height="16" fill="#fff" />
		</Button>
	)
}

export default DeleteButton
