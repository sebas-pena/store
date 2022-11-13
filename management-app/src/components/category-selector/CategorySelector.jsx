import { useEffect } from "react"
import { useState } from "react"
import Button from "../button/Button"
import StyledText from "../styled-text/StyledText"
import "./CategorySelector.css"

const CategorySelector = ({ handleChange, value = [] }) => {
	const [categories, setCategories] = useState(value)
	const [showCategories, setShowCategories] = useState(false)
	useEffect(() => {
		setShowCategories(false)
		if (value.length === 0) {
			fetch("https://api.mercadolibre.com/sites/MLU/categories")
				.then((res) => res.json())
				.then((data) => {
					setCategories(data)
					setShowCategories(true)
				})
		} else {
			setShowCategories(false)
			fetch(
				`https://api.mercadolibre.com/categories/${value[value.length - 1].id}`
			)
				.then((res) => res.json())
				.then((data) => {
					setShowCategories(true)
					setCategories(data["children_categories"])
				})
		}
	}, [value])

	const handleSelect = (category) => {
		handleChange([...value, category])
	}
	const handleRemoveSelection = (position) => {
		const copyOfaValue = [...value]
		copyOfaValue.length = position
		handleChange(copyOfaValue)
	}
	return (
		<div className="category-selector__ctn">
			<StyledText small semiBold>
				Categories
			</StyledText>
			<div className="category-selector__placeholder">
				{value.map((category, i) => (
					<div key={category.id} className="category-selector__selection-ctn">
						<StyledText regular asSpan>
							{category.name}
						</StyledText>
						<Button
							predefinedStyle="danger"
							height="20px"
							onClick={() => handleRemoveSelection(i)}
						>
							x
						</Button>
					</div>
				))}
			</div>
			<div className={`category-selector ${showCategories ? "show" : ""}`}>
				{categories.map((category) => (
					<Button
						predefinedStyle="light-grey"
						height="30px"
						width="100%"
						key={category.id}
						onClick={() => handleSelect(category)}
						transitionDuration="0"
						radius="0"
					>
						<StyledText align="left" semiBold>
							{category.name}
						</StyledText>
					</Button>
				))}
			</div>
		</div>
	)
}

export default CategorySelector
