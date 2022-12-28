import React from "react"
import { useState, useRef } from "react"
import predictCategory from "../../helpers/meli/categories/predictCategory"
import Button from "../button/Button"
import SearchInput from "../input/SearchInput"
import StyledText from "../styled-text/StyledText"
import MeliLogo from "../../assets/images/logos/meli-logo.png"
import CategorySelector from "../category-selector/CategorySelector"
import "./PredictCategory.css"
import { useEffect } from "react"

const PredictCategory = ({ onChange, pageCtn }) => {
	const [inputValue, setInputValue] = useState("")
	const [predictedCategories, setPredictedCateogries] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [showAllCategories, setShowAllCategories] = useState(false)
	const resultsRef = useRef(null)
	useEffect(() => {
		console.log(pageCtn, predictedCategories)
		if (predictedCategories && pageCtn) {
			const position = resultsRef.current.getBoundingClientRect()
			pageCtn.scrollTo({ top: position.bottom + 30, behavior: "smooth" })
			console.log(position, pageCtn)
		}
	}, [predictedCategories])
	const handlePredict = (e) => {
		e.preventDefault()
		if (isLoading || inputValue === "") return
		setIsLoading(true)
		predictCategory(inputValue).then((results) => {
			setPredictedCateogries(
				results.map(({ domain_name, category_id }) => {
					return { name: domain_name, id: category_id }
				})
			)
			setIsLoading(false)
		})
	}
	console.log(isLoading)
	console.log(predictedCategories)
	return (
		<div className="predict-category" ref={resultsRef}>
			<div className="ctn">
				<StyledText color="#333" semiBold size="20px" mb={10}>
					What do you want to publish?
				</StyledText>
				<StyledText color="#333" size="16px" mb={25}>
					Indicate product, brand, model and main characteristics.
				</StyledText>
				<form className="predict-category__input-ctn" onSubmit={handlePredict}>
					<SearchInput
						height={50}
						placeholder="e.g.: Samsung Galaxy S9 64 GB Black"
						helper="Add the main characteristics of the product to improve the search."
						onChange={(value) => setInputValue(value)}
						value={inputValue}
					/>
					<Button height={50} type="submit">
						<StyledText size="16px" color="#fff" semiBold>
							Continue
						</StyledText>
					</Button>
				</form>
			</div>
			{predictedCategories !== null && (
				<div className="predict-category__results">
					<div className="ctn">
						<StyledText>These are the results of the prediction:</StyledText>
					</div>
					<ul>
						{predictedCategories.map((prediction) => (
							<li>
								<button onClick={() => onChange(prediction)}>
									<StyledText>{prediction.name}</StyledText>
								</button>
							</li>
						))}
						<li>
							<button
								onClick={() => {
									setShowAllCategories(true)
									setPredictedCateogries(null)
								}}
							>
								<StyledText>None of them match</StyledText>
							</button>
						</li>
					</ul>
					<div className="ctn predictedby">
						<StyledText>Predicted by:</StyledText>
						<img src={MeliLogo} alt="logo de mercado libre." />
						<StyledText>Mercado Libre</StyledText>
					</div>
				</div>
			)}
			{showAllCategories && (
				<div className="predict-category__all-categories-ctn">
					<StyledText>Which best describes your product?</StyledText>
					<CategorySelector handleChange={() => {}} value={null} />
				</div>
			)}
		</div>
	)
}

export default PredictCategory
