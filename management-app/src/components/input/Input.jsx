import StyledText from "../styled-text/StyledText"
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
	min = "",
	max = "",
	autoComplete = "off",
	radius = 5,
	pl = 10,
	padding = "0 10px",
	position = "unset",
}) => {
	const inputStyles = {
		maxWidth,
		width,
		borderRadius: radius,
		padding: padding,
		position,
	}
	const extraProps = {}
	if (min !== undefined) extraProps.min = min
	if (max !== undefined) extraProps.max = max
	return (
		<label className="input__label" style={{ width }}>
			{label && (
				<StyledText small semiBold>
					{label}
				</StyledText>
			)}
			<input
				className={`input ${hideControls ? "hide-controls" : ""}`}
				name={name}
				placeholder={placeholder}
				type={type}
				style={inputStyles}
				value={value}
				spellCheck="false"
				onChange={onChange}
				autoComplete={autoComplete}
				{...extraProps}
			/>
		</label>
	)
}

export default Input
