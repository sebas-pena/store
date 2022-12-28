import React from "react"
import FlexContainer from "../../atoms/Container/FlexContainer"
import AstroLogo from "../../atoms/Images/AstroLogo/AstroLogo"
import Text from "../../atoms/Text/Text"

const AsideHeader = () => {
	return (
		<FlexContainer
			gap={10}
			height={64}
			center
			background="#fff"
			margin="20px 0"
		>
			<AstroLogo height={35} />
			<Text color="#404043" size={24} as="h1" bold>
				Astro Shop
			</Text>
		</FlexContainer>
	)
}

export default AsideHeader
