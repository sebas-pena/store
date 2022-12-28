import React from "react"
import Container from "./Container"
const FlexContainer = ({
	vertical,
	center,
	gap,
	justify,
	align,
	children,
	inline,
	border,
	relative,
	wrap,
	...props
}) => {
	const styles = {
		display: inline ? "inline-flex" : "flex",
	}

	vertical && (styles.flexDirection = "column")
	justify && (styles.justifyContent = justify)
	align && (styles.alignItems = align)
	gap && (styles.gap = gap)
	wrap && (styles.flexWrap = "wrap")

	relative && (styles.position = "relative")

	if (center) {
		styles.alignItems = "center"
		styles.justifyContent = "center"
	}

	return (
		<Container styles={styles} {...props}>
			{children}
		</Container>
	)
}

export default FlexContainer
