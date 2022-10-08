import React from "react"
import "./CheckBox.css"
const CheckBox = ({ id, name, text, onChange }) => {
	return (
		<>
			<input id={id} type="checkbox" name={name} onChange={onChange} />
			<label for={id}>
				<span></span>
				{text}
				<ins>
					<i>{text}</i>
				</ins>
			</label>
		</>
	)
}

export default CheckBox
