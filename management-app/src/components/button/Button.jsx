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
	height = 32,
	width = "unset",
	maxWidth = "unset",
	minHeight = "unset",
	paddingX = "24px",
	paddingY = "0",
	transitionDuration = ".3s",
	radius = "5px",
	position = "unset",
	zIndex = "unset",
	handleRef,
}) => {
	let buttonStyle = {
		backgroundColor: bgColor,
		width,
		height,
		maxWidth,
		padding: `${paddingY} ${paddingX}`,
		borderRadius: radius,
		position,
		zIndex,
		minHeight,
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
		case "light-grey":
			bgColor = "#e9eaee"
			bgHover = "#dadadb"
			color = "#a2a2a2"
			colorHover = "#828283"
			break
		case "danger":
			bgColor = "#ee6a6a"
			bgHover = "#e91e2a"
			break
	}
	buttonStyle.color = color
	buttonStyle.backgroundColor = bgColor
	buttonStyle["--bgHover"] = bgHover
	buttonStyle["--colorHover"] = colorHover
	buttonStyle["--transitionDuration"] = transitionDuration

	return (
		<button
			className={`button__ctn ${className || ""} ${
				disabled ? "disabled" : ""
			} ${removeHover ? "remove-hover" : ""}`}
			style={buttonStyle}
			onClick={onClick}
			type={type}
			disabled={disabled}
			ref={handleRef}
		>
			{children}
		</button>
	)
}

export default Button
