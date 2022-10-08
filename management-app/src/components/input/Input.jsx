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
}) => {
	return (
		<label className="input__label">
			{<p>{label}</p>}
			<input
				className={`input ${hideControls ? "hide-controls" : ""}`}
				name={name}
				placeholder={placeholder}
				type={type}
				style={{
					maxWidth,
				}}
				value={value}
				spellCheck="false"
				onChange={onChange}
			/>
		</label>
	)
}

export default Input
