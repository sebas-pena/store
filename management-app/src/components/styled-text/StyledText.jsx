import React from "react"
import "./StyledText.css"
const StyledText = ({
	bold,
	semiBold,
	regular,
	medium,
	small,
	big,
	color = "#333",
	size = 16,
	asSpan,
	asHeader,
	align,
	children,
	mb = 0,
	mt = 0,
	maxLines,
	maxWidth,
	noBreak,
}) => {
	const styles = {
		color,
		fontSize: size,
		marginBottom: mb,
		marginTop: mt,
	}

	bold && (styles.fontWeight = 600)
	semiBold && (styles.fontWeight = 500)
	regular && (styles.fontWeight = 400)
	big && (styles.fontSize = 24)
	medium && (styles.fontSize = 18)
	small && (styles.fontSize = 14)
	align && (styles.textAlign = align)
	maxLines && (styles["--MaxLines"] = maxLines)
	maxLines && (styles.overflow = "hidden")
	maxLines && (styles.wordBreak = "break-all")
	maxWidth && (styles.maxWidth = maxWidth)
	noBreak && (styles.whiteSpace = "nowrap")
	if (asSpan) {
		return (
			<span className="styled-text" style={styles}>
				{children}
			</span>
		)
	} else if (asHeader === 1) {
		return (
			<h1 className="styled-text" style={styles}>
				{children}
			</h1>
		)
	} else if (asHeader === 2) {
		return (
			<h2 className="styled-text" style={styles}>
				{children}
			</h2>
		)
	} else if (asHeader === 3) {
		return (
			<h3 className="styled-text" style={styles}>
				{children}
			</h3>
		)
	} else if (asHeader === 4) {
		return (
			<h4 className="styled-text" style={styles}>
				{children}
			</h4>
		)
	} else if (asHeader === 5) {
		return (
			<h5 className="styled-text" style={styles}>
				{children}
			</h5>
		)
	} else {
		return (
			<p className="styled-text" style={styles}>
				{children}
			</p>
		)
	}
}

export default StyledText
