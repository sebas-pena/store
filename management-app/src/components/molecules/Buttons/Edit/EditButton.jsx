import React from "react"
import { Pen } from "../../../atoms/Icons"
import "./EditButton.css"

const EditButton = ({ onClick }) => {
	return (
		<button className="edit-button" onClick={onClick}>
			<Pen fill="#fff" height="16" />
		</button>
	)
}

export default EditButton
