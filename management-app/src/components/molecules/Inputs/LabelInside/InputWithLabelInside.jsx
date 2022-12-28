import React from "react"
import Icons from "../../../atoms/Icons"
import "./InputWithLabelInside.css"

const InputWithLabelInside = ({
	label,
	name,
	onChange,
	type = "text",
	value,
	background = "#fff",
	width,
	flex,
	maxWidth,
	icon,
	error,
}) => {
	const styles = { backgroundColor: background }
	if (type == "email") icon = "At"
	else if (type == "password") icon = "Lock"
	const Icon = Icons[icon] || null
	width && (styles.width = width)
	flex && (styles.flex = flex)
	if (maxWidth) {
		styles.maxWidth = maxWidth
		styles.width = "100%"
	}
	return (
		<label
			className={`input-with-label-inside ${value.length > 0 ? "filled" : ""} ${
				error ? "error" : ""
			}`}
			style={styles}
		>
			<p>{label}</p>
			<input name={name} onChange={onChange} type={type} value={value} />
			{Icon && <Icon width="20" />}
		</label>
	)
}

export default InputWithLabelInside
