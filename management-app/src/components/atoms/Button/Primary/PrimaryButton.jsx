import React from "react"
import { Link } from "react-router-dom"
import "./PrimaryButton.css"

const PrimaryButton = ({
	width,
	margin,
	padding,
	children,
	heigth,
	as,
	to,
	onClick,
}) => {
	const styles = {}
	width && (styles.width = width)
	margin && (styles.margin = margin)
	padding && (styles.padding = padding)
	heigth && (styles.heigth = heigth)

	return as == "link" ? (
		<Link to={to} className="primary-button button" style={styles}>
			{children}
		</Link>
	) : as == "div" ? (
		<div className="primary-button button" style={styles}>
			{children}
		</div>
	) : (
		<button className="primary-button" style={styles} onClick={onClick}>
			{children}
		</button>
	)
}

export default PrimaryButton
