import React from "react"
import "./CheckBox.css"
const CheckBox = ({ id, name, text, onChange, checked, height = "35px" }) => {
	return (
		<div
			style={{
				height,
				display: "flex",
				alignItems: "center",
			}}
		>
			<input
				id={id}
				type="checkbox"
				name={name}
				onClick={onChange}
				checked={checked}
			/>
			<label htmlFor={id}>
				<span></span>
				{text}
				<ins>
					<i>{text}</i>
				</ins>
			</label>
		</div>
	)
}

export default CheckBox
