import React from "react"
import { useState } from "react"
import predictCategory from "../../helpers/meli/categories/predictCategory"
import Button from "../button/Button"
import SearchInput from "../input/SearchInput"
import StyledText from "../styled-text/StyledText"
import "./PredictCategory.css"

const PredictCategory = ({ setIsLoading, onChange }) => {
	const [inputValue, setInputValue] = useState("")
	const [searchTriggered, setSearchTriggered] = useState(false)
	const handlePredict = () => {
		if (!searchTriggered) setSearchTriggered(true)
		if (!inputValue === "") return
		setIsLoading(true)
		predictCategory(inputValue).then((results) => {
			onChange(
				results.map(({ domain_name, category_id }) => {
					return { domain_name, category_id }
				})
			)
			setIsLoading(false)
		})
	}
	return (
		<div className="predict-category">
			<StyledText color="#333" semiBold size="20px" mb={10}>
				What do you want to publish?
			</StyledText>
			<StyledText color="#333" size="16px" mb={25}>
				Indicate product, brand, model and main characteristics.
			</StyledText>
			<div className="predict-category__input-ctn">
				<SearchInput
					height={50}
					placeholder="e.g.: Samsung Galaxy S9 64 GB Black"
					helper="Add the main characteristics of the product to improve the search."
					onChange={(value) => setInputValue(value)}
					value={inputValue}
				/>
				<Button height={50} onClick={handlePredict}>
					<StyledText size="16px" color="#fff" semiBold>
						Continue
					</StyledText>
				</Button>
			</div>
		</div>
	)
}

export default PredictCategory
