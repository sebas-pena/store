import "./Button.css"

const Button = ({
	color = "#fff",
	disabled,
	colorHover,
	bgColor = "#3A78F2",
	bgHover = "#2564e0",
	predefinedStyle = "",
	children,
	onClick,
	className = "",
	type = "button",
	removeHover,
	height = "unset",
	width = "unset",
	maxWidth = "unset",
	paddingX = "15px",
}) => {
	let buttonStyle = {
		backgroundColor: bgColor,
		width,
		height,
		maxWidth,
		padding: `0 ${paddingX}`,
		color,
	}

	if (!colorHover) colorHover = color
	switch (predefinedStyle) {
		case "simple":
			bgColor = "transparent"
			bgHover = "transparent"
			break
		case "primary":
			bgColor = "#3A78F2"
			bgHover = "#2564e0"
			break
		case "grey":
			bgColor = "#cccccc"
			bgHover = "#a4a4a4"
			break
		case "danger":
			bgColor = "#ee6a6a"
			bgHover = "#e91e2a"
			break
	}

	buttonStyle.backgroundColor = bgColor
	buttonStyle["--bgHover"] = bgHover
	buttonStyle["--colorHover"] = colorHover

	return (
		<button
			className={`button__ctn ${className || ""} ${
				disabled ? "disabled" : ""
			} ${removeHover ? "remove-hover" : ""}`}
			style={buttonStyle}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default Button
