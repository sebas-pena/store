import React from "react"
import "./Text.css"
const Text = ({
	children,
	size = 16,
	color,
	as = "p",
	thin,
	bold,
	regular,
	addEllipsis,
	heavy,
	relative,
	className = "",
	margin,
	padding,
	maxLines,
	align,
	wordBreak,
	capitalize,
}) => {
	const styles = { fontSize: size }
	color && (styles.color = color)
	margin && (styles.margin = margin)
	padding && (styles.padding = padding)
	align && (styles.textAlign = align)
	wordBreak && (styles.wordBreak = wordBreak)
	thin && (styles.fontWeight = 400)
	regular && (styles.fontWeight = 500)
	bold && (styles.fontWeight = 600)
	heavy && (styles.fontWeight = 700)
	capitalize && (styles.textTransform = "capitalize")
	relative && (styles.position = "relative")
	maxLines && (styles["--max-lines"] = maxLines)
	if (addEllipsis) {
		styles.overflow = "hidden"
		styles.textOverflow = "ellipsis"
	}

	return as == "h1" ? (
		<h1 className={maxLines ? "text__clamp " : "" + className} style={styles}>
			{children}
		</h1>
	) : as == "h2" ? (
		<h2 className={maxLines ? "text__clamp " : "" + className} style={styles}>
			{children}
		</h2>
	) : as == "h3" ? (
		<h3 className={maxLines ? "text__clamp " : "" + className} style={styles}>
			{children}
		</h3>
	) : as == "h4" ? (
		<h4 className={maxLines ? "text__clamp " : "" + className} style={styles}>
			{children}
		</h4>
	) : as == "h5" ? (
		<h5 className={maxLines ? "text__clamp " : "" + className} style={styles}>
			{children}
		</h5>
	) : as == "h6" ? (
		<h6 className={maxLines ? "text__clamp " : "" + className} style={styles}>
			{children}
		</h6>
	) : as == "span" ? (
		<span className={maxLines ? "text__clamp " : "" + className} style={styles}>
			{children}
		</span>
	) : (
		<p className={maxLines ? "text__clamp " : "" + className} style={styles}>
			{children}
		</p>
	)
}

export default Text
