import { useState, useEffect, useRef, useCallback } from "react"
import Button from "../../button/Button"
import StyledText from "../../styled-text/StyledText"
import Input from "../Input"
import "./InputWithUnit.css"
import useClickOutside from "../../../hooks/useClickOutside"
import { useContext } from "react"
import { StoreContext } from "../../../store/StoreProvider"
const InputWithUnit = ({
	onChange,
	label = "Price",
	value,
	width = 200,
	units = [],
	unitsPosition = "right",
	name,
}) => {
	const { integersSeparator, decimalSeparator } = useContext(StoreContext).store
	const [showOptions, setShowOptions] = useState(false)
	const handleOpenBox = (e) => {
		e.stopPropagation()
		setShowOptions(!showOptions)
	}
	const dropDownRef = useRef(null)
	const ctnRef = useRef(null)
	useClickOutside(ctnRef, () => {
		setShowOptions(false)
	})

	const repositionElement = useCallback(() => {
		const optionsContainer = ctnRef.current
		let buttonPosition = dropDownRef.current.getBoundingClientRect()
		buttonPosition = buttonPosition.top + buttonPosition.height
		const ctnTop = optionsContainer.getBoundingClientRect().top
		const distance = ctnTop - buttonPosition
		const currentPosition =
			parseInt(
				window.getComputedStyle(optionsContainer).transform.split(",").pop()
			) || 0

		optionsContainer.style.transform = `translateY(${
			currentPosition - distance
		}px)`
	}, [])

	useEffect(() => {
		const hideOption = (e) => {
			if (ctnRef.current == e.target || ctnRef.current.contains(e.target))
				return
			setShowOptions(false)
		}
		if (dropDownRef.current && ctnRef.current) {
			repositionElement()
			window.addEventListener("scroll", hideOption, true)
			window.addEventListener("scroll", repositionElement, true)
		}
		return () => {
			window.removeEventListener("scroll", repositionElement, true)
			window.removeEventListener("scroll", hideOption, true)
		}
	}, [dropDownRef, ctnRef])
	useEffect(() => {
		if (dropDownRef.current && ctnRef.current) repositionElement()
	}, [showOptions])

	const handleChangeValue = (e) => {
		let inputValue = e.target.value
		if (/[^0-9\.|\,]/g.test(inputValue)) return
		let parsedNumbers = inputValue.split(decimalSeparator)
		if (parsedNumbers.length > 2) return
		let [integers, decimals] = parsedNumbers
		if (decimals) {
			if (decimals.includes(integersSeparator)) return
		}
		integers = integers.replaceAll(integersSeparator, "")
		let valueFormated
		integers = Number(integers).toLocaleString()
		if (decimals) {
			valueFormated = `${integers}${decimalSeparator}${decimals}`
		} else if (decimals === undefined) {
			valueFormated = integers
		} else if (decimals === "") {
			valueFormated = `${integers}${decimalSeparator}`
		} else if (inputValue === "") {
			valueFormated = ""
		}
		onChange({
			name,
			value: {
				value: valueFormated,
				unit: value.unit,
			},
			custom: true,
		})
	}
	const handleChangeUnit = (option) => {
		onChange({
			name,
			value: {
				value: value.value,
				unit: option,
			},
			custom: true,
		})
		setShowOptions(false)
	}
	return (
		<div style={{ width }}>
			<StyledText small semiBold>
				{label}
			</StyledText>
			<div className={`input-with-unit__ctn ${unitsPosition}`}>
				<Input
					radius={
						showOptions
							? unitsPosition === "right"
								? "5px 0 0 0"
								: "0 5px 0 0"
							: unitsPosition === "right"
							? "5px 0 0 5px"
							: "0 5px 5px 0"
					}
					width={parseInt(width) - 50}
					position="relative"
					padding="0 10px"
					type="text"
					value={value?.value || 0}
					onChange={handleChangeValue}
				/>
				<Button
					onClick={handleOpenBox}
					width="50px"
					paddingX="0"
					height={32}
					predefinedStyle={"primary"}
					radius={
						showOptions
							? unitsPosition === "right"
								? "0 5px 0 0"
								: "5px 0 0 0"
							: unitsPosition === "right"
							? "0 5px 5px 0"
							: "5px 0 0 5px"
					}
					position="relative"
					zIndex="2"
					handleRef={dropDownRef}
				>
					{value?.unit?.symbol}
				</Button>
			</div>
			<div
				className={`input-with-unit__currency__options ${
					showOptions ? "visible" : ""
				}`}
				ref={ctnRef}
				style={{
					width,
				}}
			>
				{units.map((option) => (
					<Button
						key={option.id}
						width="100%"
						height={35}
						onClick={() => {
							handleChangeUnit(option)
						}}
						radius="0"
						predefinedStyle={value?.unit?.id === option.id ? "primary" : "grey"}
					>
						{option.name || option.symbol}
					</Button>
				))}
			</div>
		</div>
	)
}

export default InputWithUnit
