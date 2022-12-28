import React from "react"
import Container from "./Container"

const TableContainer = ({ spacing = "0 10px", children, ...props }) => {
	const styles = {
		borderSpacing: spacing,
	}
	return (
		<Container as="table" styles={styles} {...props}>
			{children}
		</Container>
	)
}

export default TableContainer
