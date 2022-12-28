import React from "react"
import DivContainer from "../../atoms/Container/DivContainer"
import FlexContainer from "../../atoms/Container/FlexContainer"
import AstroLogo from "../../atoms/Images/AstroLogo/AstroLogo"
import Text from "../../atoms/Text/Text"
import LoginBackground from "../../../assets/images/login-background.png"
import "./AuthWelcome.css"

const AuthWelcome = () => {
	return (
		<FlexContainer
			vertical
			gap={20}
			flex={1}
			maxWidth={440}
			center
			className="auth-welcome__ctn"
			radius="10px 0 0 10px"
			overflow="hidden"
		>
			<img src={LoginBackground} alt="" className="auth-welcome__background" />
			<FlexContainer
				gap={20}
				background="#fff"
				center
				padding="5px 15px"
				radius={10}
			>
				<AstroLogo height={50} />
				<Text as="h1" color="#e4003a" size={50} regular>
					Astro Shop
				</Text>
			</FlexContainer>
			<DivContainer
				align="center"
				size={25}
				className="auth-welcome__welcome-text"
			>
				<Text color="#fff" size={20}>
					WELCOME BACK
				</Text>
			</DivContainer>
		</FlexContainer>
	)
}

export default AuthWelcome
