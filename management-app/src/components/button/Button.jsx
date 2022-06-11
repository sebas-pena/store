import "./Button.css"
const bgColor = {
	primary: "#3A78F2",
	secondary: "#00a8ff",
	success: "#00a8ff",
	danger: "#00a8ff",
	warning: "#00a8ff",
	info: "#00a8ff",
	light: "#00a8ff",
	dark: "#00a8ff",
}

const buttonBig = {
	width: "100%",
	height: "50px",
}

const buttonSmall = {
	padding: "10px 20px",
}

const Button = ({ color = "", children, small, big }) => {
	let buttonStyle = {
		backgroundColor: bgColor[color] || bgColor.primary,
		...(small ? buttonSmall : {}),
		...(big ? buttonBig : {}),
	}

	return (
		<button className="button__ctn" style={buttonStyle}>
			{children}
		</button>
	)
}

export default Button
