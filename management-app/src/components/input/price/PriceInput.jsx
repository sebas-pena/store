import { useState, useEffect } from "react"
import Button from "../../button/Button"
import SelectBox from "../../input/select-box/SelectBox"
import StyledText from "../../styled-text/StyledText"
import Input from "../Input"
import "./PriceInput.css"
const PriceInput = ({
	handleChange,
	value = { price: 0, currency: null },
	width = 200,
}) => {
	const [currencies, setCurrencies] = useState([])
	const [showOptions, setShowOptions] = useState(false)

	const { currency, price } = value

	useEffect(() => {
		fetch("https://api.mercadolibre.com/currencies/")
			.then((res) => res.json())
			.then((data) => {
				const parsedData = data.map((currency) => {
					return {
						id: currency.id,
						title: currency.description,
						symbol: currency.symbol,
					}
				})
				setCurrencies(parsedData)
			})
	}, [])

	const handleChangeCurrency = (option) => {
		handleChange({
			price,
			currency: option,
		})
		setShowOptions(false)
	}

	const handleChangeValue = (e) => {
		let inputValue = e.target.value
		if (/[^0-9\.|\,]/g.test(inputValue)) return
		const INTEGERS_SEPARATOR = Number(10000).toLocaleString().charAt(2)
		const DECIMAL_SEPARATOR = Number(1.1).toLocaleString().charAt(1)
		let parsedNumbers = inputValue.split(DECIMAL_SEPARATOR)
		if (parsedNumbers.length > 2) return
		let [integers, decimals] = parsedNumbers
		if (decimals) {
			if (decimals.includes(INTEGERS_SEPARATOR)) return
		}
		integers = integers.replaceAll(INTEGERS_SEPARATOR, "")
		let value
		integers = Number(integers).toLocaleString()
		if (decimals) {
			value = `${integers}${DECIMAL_SEPARATOR}${decimals}`
		} else if (decimals === undefined) {
			value = integers
		} else if (decimals === "") {
			value = `${integers}${DECIMAL_SEPARATOR}`
		} else if (inputValue === "") {
			value = ""
		}
		handleChange({
			currency,
			price: value,
		})
	}

	const handleOpenBox = (e) => {
		e.stopPropagation()
		setShowOptions(!showOptions)
	}

	useEffect(() => {
		const handleClickOutside = () => {
			if (showOptions) setShowOptions(false)
		}
		document.addEventListener("click", handleClickOutside)
		return () => {
			document.removeEventListener("click", handleClickOutside)
		}
	}, [])

	return (
		<div style={{ width }}>
			<StyledText small semiBold>
				Price
			</StyledText>
			<div className="price-input__ctn">
				<div className="price-input__currency__options-ctn">
					<Button
						onClick={handleOpenBox}
						width="50px"
						paddingX="0"
						height={35}
						predefinedStyle={"primary"}
						radius={showOptions ? "5px 0 0 0" : "5px 0 0 5px"}
						position="relative"
						zIndex="2"
					>
						{currency.symbol || "$"}
					</Button>
					<div
						className={`price-input__currency__options ${
							showOptions ? "visible" : ""
						}`}
					>
						{currencies.map((option) => (
							<Button
								key={option.title}
								width="100%"
								height={35}
								onClick={() => {
									handleChangeCurrency(option)
								}}
								radius="0"
								predefinedStyle={
									currency.id === option.id ? "primary" : "light-grey"
								}
							>
								{option.title}
							</Button>
						))}
					</div>
				</div>
				<Input
					name="price"
					radius="0 5px 5px 0"
					width="100%"
					position="relative"
					pl="60px"
					type="text"
					value={value.price}
					onChange={handleChangeValue}
				/>
			</div>
		</div>
	)
}

export default PriceInput
