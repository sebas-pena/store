import React from "react"
import DivContainer from "../../components/atoms/Container/DivContainer"
import FlexContainer from "../../components/atoms/Container/FlexContainer"
import Text from "../../components/atoms/Text/Text"
import KittenImage from "../../assets/images/kitten-sleeping.jpg"
import "./Error404Page.css"
import Button from "../../components/atoms/Button/Button"
import Link from "../../components/atoms/Link/Link"
import AstroLogo from "../../components/atoms/Images/AstroLogo/AstroLogo"

const Error404Page = () => {
	return (
		<FlexContainer
			maxWidth={900}
			height="100vh"
			margin="auto"
			vertical
			padding={20}
		>
			<FlexContainer center gap={20}>
				<AstroLogo height={40} />
				<Text as="h1" size={30} color="#e4003a">
					Astro
				</Text>
			</FlexContainer>
			<FlexContainer center gap={20}>
				<DivContainer>
					<Text size={48} heavy color="#2183b1">
						404 Page
					</Text>
					<Text size={48} heavy color="#2183b1">
						Not Found
					</Text>
					<FlexContainer gap={20} vertical margin="20px 0 0 0">
						<Text size={18}>
							Whoops, it seems that your page is under the kitten and we don't
							want to wake it up.
						</Text>
						<FlexContainer vertical gap={8}>
							<Text bold size={18}>
								Maybe you can find what you're looking for in these:
							</Text>
							<Link to="/" width="max-content">
								Dashboard
							</Link>
							<Link to="/products" width="max-content">
								Products
							</Link>
							<Link to="/new-product" width="max-content">
								New Product
							</Link>
							<Link to="/settings" width="max-content">
								Settings
							</Link>
						</FlexContainer>
					</FlexContainer>
				</DivContainer>

				<img
					className="Error-404__kitten"
					src={KittenImage}
					alt="the cute kitten"
				/>
			</FlexContainer>
		</FlexContainer>
	)
}

export default Error404Page
