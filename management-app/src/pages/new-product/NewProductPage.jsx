import React, { useContext, useState, useRef } from "react"
import { StoreContext } from "../../store/StoreProvider"
import { ReactComponent as MotorCycleIcon } from "../../assets/svg/motorcycle.svg"
import { ReactComponent as ServicesIcon } from "../../assets/svg/services.svg"
import { ReactComponent as RealEstatesIcon } from "../../assets/svg/real-estate.svg"
import { ReactComponent as ShoesIcon } from "../../assets/svg/shoes.svg"
import AstroLogo from "../../assets/images/logo.png"
import "./NewProductPage.css"
import StyledText from "../../components/styled-text/StyledText"
import PredictCategory from "../../components/predict-category/PredictCategory"

const titles = {
	products: [
		{
			top: "Let's start by identifying your product.",
			bottom: "",
		},
	],
	services: [{}],
	realestates: [{}],
	vehicles: [{}],
}

const NewProductPage = () => {
	const { user } = useContext(StoreContext).store
	const [mainCategory, setMainCategory] = useState(null)
	const [step, setStep] = useState(null)
	const [category, setCategory] = useState(null)
	const pageCtnRef = useRef(null)
	return (
		<div className="new-product-page" ref={pageCtnRef}>
			<header className="new-product-page__header">
				<div className="new-product-page__header-ctn">
					<div className="logo">
						<img src={AstroLogo} alt="Astro Logo" />
						<StyledText size="30px" semiBold>
							AstroShop
						</StyledText>
					</div>
				</div>
			</header>
			<div className="new-product-page__background"></div>
			<div className="new-product-page__ctn">
				<div className="new-product-page__title">
					{step && (
						<StyledText
							size="18px"
							color="#fff"
							semiBold
						>{`step ${step.number}/${step.of}`}</StyledText>
					)}
					<StyledText size="35px" color="#fff" semiBold>
						{mainCategory
							? titles[mainCategory][step.number - 1].top
							: "Hello! First of all, tell us,"}
					</StyledText>
					<StyledText size="35px" color="#fff" semiBold>
						{mainCategory
							? titles[mainCategory][step.number - 1].bottom
							: "what are you going to publish?"}
					</StyledText>
				</div>
				<div
					className={`new-product-page__main-categories ${
						mainCategory ? "hide" : ""
					}`}
				>
					<button
						onClick={() => {
							setMainCategory("products")
							setStep({ number: 1, of: 2 })
						}}
					>
						<ShoesIcon width="110" height="110" />
						<StyledText>Product</StyledText>
					</button>
					<button
						onClick={() => {
							setMainCategory("vehicles")
							setStep({ number: 1, of: 2 })
						}}
					>
						<MotorCycleIcon width="110" height="110" />
						<StyledText>Vehicle</StyledText>
					</button>
					<button
						onClick={() => {
							setMainCategory("realestates")
							setStep({ number: 1, of: 2 })
						}}
					>
						<RealEstatesIcon width="110" height="110" />
						<StyledText>Real Estate</StyledText>
					</button>
					<button
						onClick={() => {
							setMainCategory("services")
							setStep({ number: 1, of: 2 })
						}}
					>
						<ServicesIcon width="110" height="110" />
						<StyledText>Service</StyledText>
					</button>
				</div>
				<div
					className={`new-product-page__predict-wrapper ${
						mainCategory ? "show" : ""
					}`}
				>
					<PredictCategory
						onChange={setCategory}
						pageCtn={pageCtnRef.current}
					/>
				</div>
			</div>
		</div>
	)
}

export default NewProductPage
