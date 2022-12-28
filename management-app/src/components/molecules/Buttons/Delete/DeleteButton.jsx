import React from "react"
import { Trash } from "../../../atoms/Icons"
import "./DeleteButton.css"
const DeleteButton = ({ onClick }) => {
	return (
		<button className="delete-button" onClick={onClick}>
			<Trash height="16" fill="#fff" />
		</button>
	)
}

export default DeleteButton
