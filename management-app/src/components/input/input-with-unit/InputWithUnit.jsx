import { useState, useEffect, useRef, useCallback } from "react"
import Button from "../../button/Button"
import StyledText from "../../styled-text/StyledText"
import Input from "../Input"
import "./InputWithUnit.css"
import useClickOutside from "../../../hooks/useClickOutside"
const InputWithUnit = ({
	onChange,
	label = "Price",
	value,
	width = 200,
	units = [],
	unitsPosition = "right",
	name,
}) => {
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
		const hideOption = () => {
			setShowOptions(false)
		}
		if (dropDownRef.current && ctnRef.current) {
			repositionElement()
			window.addEventListener("scroll", hideOption, true)
			window.addEventListener("scroll", repositionElement, true)
		}
		return () => {
			window.removeEventListener("scroll", repositionElement, true)
			window.addEventListener("scroll", hideOption, true)
		}
	}, [dropDownRef, ctnRef])
	useEffect(() => {
		if (dropDownRef.current && ctnRef.current) repositionElement()
	}, [showOptions])

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
		let value2
		integers = Number(integers).toLocaleString()
		if (decimals) {
			value2 = `${integers}${DECIMAL_SEPARATOR}${decimals}`
		} else if (decimals === undefined) {
			value2 = integers
		} else if (decimals === "") {
			value2 = `${integers}${DECIMAL_SEPARATOR}`
		} else if (inputValue === "") {
			value2 = ""
		}
		onChange({
			name,
			value: {
				value: value2,
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
			<div className="input-with-unit__ctn">
				<Input
					radius=""
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
					height={35}
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
						key={option.symbol}
						width="100%"
						height={35}
						onClick={() => {
							handleChangeUnit(option)
						}}
						radius="0"
						predefinedStyle={
							value?.unit?.id === option.id ? "primary" : "light-grey"
						}
					>
						{option.symbol}
					</Button>
				))}
			</div>
		</div>
	)
}

export default InputWithUnit
