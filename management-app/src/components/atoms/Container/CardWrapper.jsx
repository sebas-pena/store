import React, { Children } from "react"
import FlexContainer from "./FlexContainer"

const CardWrapper = ({ children, ...props }) => {
	return (
		<FlexContainer
			background="#fff"
			padding={20}
			radius={20}
			vertical
			justify="space-between"
			flex={1}
			minWidth="max-content"
			{...props}
		>
			{children}
		</FlexContainer>
	)
}

export default CardWrapper
