import React from "react"
import "./Input.css"
const Input = ({
	label,
	name,
	onChange,
	type = "text",
	value,
	background = "#fff",
	width,
	flex,
}) => {
	const styles = { backgroundColor: background }
	width && (styles.width = width)
	flex && (styles.flex = flex)
	return (
		<label className="input" style={styles}>
			<p>{label}</p>
			<input
				className="input"
				name={name}
				onChange={onChange}
				type={type}
				value={value}
			/>
		</label>
	)
}

export default Input
