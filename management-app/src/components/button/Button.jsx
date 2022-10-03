import "./Button.css"

const buttonBgColor = {
	primary: "#3A78F2",
	secondary: "#00a8ff",
	success: "#00a8ff",
	danger: "#fd5457",
	warning: "#00a8ff",
	info: "#00a8ff",
	light: "#99bbf5",
	dark: "#00a8ff",
	gray: "#a5a5a5",
	"light-gray": "#e9e9e9",
}

const buttonBig = {
	width: "100%",
	height: "50px",
}

const buttonSmall = {
	padding: "10px 20px",
}

const Button = ({
	color = "",
	children,
	small,
	big,
	onClick,
	className = "",
	type = "button",
	removeHover,
}) => {
	let buttonStyle = {
		backgroundColor: buttonBgColor[color] || buttonBgColor.primary,
		...(small ? buttonSmall : {}),
		...(big ? buttonBig : {}),
	}

	return (
		<button
			className={`button__ctn ${className || ""} ${
				removeHover ? "remove-hover" : ""
			}`}
			style={buttonStyle}
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	)
}

export default Button
