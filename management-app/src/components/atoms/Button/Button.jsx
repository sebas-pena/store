import React from "react"
import { Link } from "react-router-dom"
import Spinner from "../Spinner"
import "./Button.css"

const Button = ({
	width,
	margin,
	padding,
	children,
	height,
	as,
	to,
	onClick,
	palette = "primary",
	align,
	maxWidth,
	disabled,
	disabledForLoading,
}) => {
	const styles = {}
	width && (styles.width = width)
	margin && (styles.margin = margin)
	padding && (styles.padding = padding)
	height && (styles.height = height)
	if (align == "left") {
		styles.textAlign = align
		styles.justifyContent = "flex-start"
	}
	if (align == "rigth") {
		styles.textAlign = align
		styles.justifyContent = "flex-end"
	}
	if (maxWidth) {
		styles.maxWidth = maxWidth
		styles.width = "100%"
	}
	return as == "link" ? (
		<Link
			to={to}
			className={`button ${palette} ${disabled ? "disabled" : ""}`}
			style={styles}
		>
			{disabled && disabledForLoading ? <Spinner size="32" /> : children}
		</Link>
	) : as == "div" ? (
		<div
			className={`button ${palette} ${disabled ? "disabled" : ""}`}
			style={styles}
			onClick={(e) => {
				if (!disabled) onClick(e)
			}}
		>
			{disabled && disabledForLoading ? <Spinner size="32" /> : children}
		</div>
	) : (
		<button
			className={`button ${palette} ${disabled ? "disabled" : ""}`}
			style={styles}
			disabled={disabled}
			onClick={onClick}
		>
			{disabled && disabledForLoading ? <Spinner size={23} /> : children}
		</button>
	)
}

export default Button
