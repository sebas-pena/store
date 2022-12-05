import "./Button.css"

const Button = ({
	disabled,
	simple,
	predefinedStyle = "primary",
	children,
	onClick,
	className = "",
	type = "button",
	height,
	size = "small",
	width = "unset",
	maxWidth = "unset",
	radius = 5,
	position = "unset",
	zIndex = "unset",
	handleRef,
	padding,
}) => {
	let buttonStyle = {
		width,
		maxWidth,
		borderRadius: radius,
		position,
		zIndex,
	}
	padding !== undefined && (buttonStyle.padding = padding)
	size == "small" && (buttonStyle.height = 32)
	size == "medium" && (buttonStyle.height = 44)
	size == "big" && (buttonStyle.height = 52)
	height && (buttonStyle.height = height)
	/* switch (predefinedStyle) {
		case "simple":
			bgColor = "transparent"
			bgHover = "transparent"
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
	}
	buttonStyle["--transitionDuration"] = transitionDuration */

	return (
		<button
			className={`button ${className || ""} ${predefinedStyle} ${
				simple ? "simple" : ""
			}`}
			onClick={onClick}
			type={type}
			disabled={disabled}
			style={buttonStyle}
			ref={handleRef}
		>
			{children}
		</button>
	)
}

export default Button
