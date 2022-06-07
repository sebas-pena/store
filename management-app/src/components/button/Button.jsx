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

const Button = ({ color = "", children }) => {
  let buttonStyle = {
    backgroundColor: bgColor[color] || bgColor.primary,
  }

  return (
    <button className="button__ctn" style={buttonStyle}>
      {children}
    </button>
  )
}

export default Button
