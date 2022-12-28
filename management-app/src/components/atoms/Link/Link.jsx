import React, { Children } from "react"
import { Link as RouterLink } from "react-router-dom"
import "./Link.css"
const Link = ({ children, color, heigth, padding, size, to, width }) => {
	const styles = {}
	color && (styles.color = color)
	size && (styles.fontSize = size)
	heigth && (styles.heigth = heigth)
	width && (styles.width = width)
	padding && (styles.padding = padding)
	return (
		<RouterLink className="link" to={to} style={styles}>
			{children}
		</RouterLink>
	)
}

export default Link
