import "./ButtonWithImage.css"

const ButtonWithImage = (props) => {
	const { children } = props
	const btnProps = { ...props }
	delete btnProps.children
	btnProps.bgColor && delete btnProps.bgColor

	const backgroundColor = props.bgColor || "#3a78f2"
	const color = props.textColot || "white"

	return (
		<button
			style={{ backgroundColor, color }}
			{...btnProps}
			className="button-with-image"
		>
			{children}
		</button>
	)
}

export default ButtonWithImage
