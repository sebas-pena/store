import React from "react"
const DivContainer = ({
	background,
	children,
	padding,
	height,
	width,
	margin,
	flex,
	maxWidth,
	overflow,
	align,
	className = "",
	radius,
}) => {
	const styles = {}

	background && (styles.backgroundColor = background)
	padding && (styles.padding = padding)
	height && (styles.height = height)
	width && (styles.width = width)
	margin && (styles.margin = margin)
	flex && (styles.flex = flex)
	maxWidth && (styles.maxWidth = maxWidth)
	overflow && (styles.overflow = overflow)
	align && (styles.textAlign = align)
	radius && (styles.borderRadius = radius)

	return (
		<div style={styles} className={className}>
			{children}
		</div>
	)
}

export default DivContainer
