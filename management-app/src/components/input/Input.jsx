import "./Input.css"

const Input = ({
	label = "",
	name = "",
	placeholder = "",
	type = "text",
	maxWidth = "unset",
	hideControls,
	value = "",
	onChange,
	width = "unset",
}) => {
	const inputStyles = {
		maxWidth,
		width,
	}
	return (
		<label className="input__label">
			{<p>{label}</p>}
			<input
				className={`input ${hideControls ? "hide-controls" : ""}`}
				name={name}
				placeholder={placeholder}
				type={type}
				style={inputStyles}
				value={value}
				spellCheck="false"
				onChange={onChange}
			/>
		</label>
	)
}

export default Input
