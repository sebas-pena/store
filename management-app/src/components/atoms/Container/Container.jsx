import React from "react"

const Container = ({
	as = "div",
	background,
	children,
	padding,
	height,
	width,
	margin,
	flex,
	maxWidth,
	minWidth,
	overflow,
	align,
	radius,
	styles = {},
	shrink,
	border,
	borderT,
	borderR,
	borderB,
	borderL,
	marginT,
	marginR,
	marginB,
	marginL,
	marginX,
	marginY,
	paddingT,
	paddingR,
	paddingB,
	paddingL,
	paddingX,
	paddingY,
	focusable,
	...props
}) => {
	background && (styles.backgroundColor = background)

	/* Border */
	border && (styles.border = border)
	borderT && (styles.borderTop = borderT)
	borderR && (styles.borderRight = borderR)
	borderB && (styles.borderBottom = borderB)
	borderL && (styles.borderLeft = borderL)

	/* Padding  */
	padding && (styles.padding = padding)
	paddingT && (styles.paddingTop = paddingT)
	paddingR && (styles.paddingRight = paddingR)
	paddingB && (styles.paddingBottom = paddingB)
	paddingL && (styles.paddingLeft = paddingL)
	paddingX && (styles.padding = `0px ${paddingX}`)
	paddingY && (styles.padding = `${paddingY} 0`)

	/* Margin */
	margin && (styles.margin = margin)
	marginX && (styles.margin = `0px ${marginX}`)
	marginY && (styles.margin = `${marginY} 0`)
	marginT && (styles.marginTop = marginT)
	marginR && (styles.marginRight = marginR)
	marginB && (styles.marginBottom = marginB)
	marginL && (styles.marginLeft = marginL)

	/* Flex Props */
	flex && (styles.flex = flex)
	shrink && (styles.shrink = shrink)

	/* Content */
	if (maxWidth) {
		styles.width = "100%"
		styles.maxWidth = maxWidth
	}
	width && (styles.width = width)
	minWidth && (styles.minWidth = minWidth)
	overflow && (styles.overflow = overflow)
	align && (styles.textAlign = align)
	radius && (styles.borderRadius = radius)
	height && (styles.height = height)

	/* Others */

	return {
		table: (
			<table style={styles} tabIndex={focusable ? 0 : undefined} {...props}>
				{children}
			</table>
		),
		tr: (
			<tr style={styles} tabIndex={focusable ? 0 : undefined} {...props}>
				{children}
			</tr>
		),
		td: (
			<td style={styles} tabIndex={focusable ? 0 : undefined} {...props}>
				{children}
			</td>
		),
		ul: (
			<ul style={styles} tabIndex={focusable ? 0 : undefined} {...props}>
				{children}
			</ul>
		),
		li: (
			<li style={styles} tabIndex={focusable ? 0 : undefined} {...props}>
				{children}
			</li>
		),
		div: (
			<div style={styles} tabIndex={focusable ? 0 : undefined} {...props}>
				{children}
			</div>
		),
		span: (
			<span style={styles} tabIndex={focusable ? 0 : undefined} {...props}>
				{children}
			</span>
		),
		nav: (
			<nav style={styles} tabIndex={focusable ? 0 : undefined} {...props}>
				{children}
			</nav>
		),
		label: (
			<label style={styles} tabIndex={focusable ? 0 : undefined} {...props}>
				{children}
			</label>
		),
		form: (
			<form style={styles} tabIndex={focusable ? 0 : undefined} {...props}>
				{children}
			</form>
		),
		aside: (
			<aside style={styles} tabIndex={focusable ? 0 : undefined} {...props}>
				{children}
			</aside>
		),
		main: (
			<main style={styles} tabIndex={focusable ? 0 : undefined} {...props}>
				{children}
			</main>
		),
		footer: (
			<footer style={styles} tabIndex={focusable ? 0 : undefined} {...props}>
				{children}
			</footer>
		),
	}[as]
}

export default Container
