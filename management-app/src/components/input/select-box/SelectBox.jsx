import { useCallback } from "react"
import { useEffect, useRef } from "react"
import { useState } from "react"
import useClickOutside from "../../../hooks/useClickOutside"
import Button from "../../button/Button"
import StyledText from "../../styled-text/StyledText"
import "./SelectBox.css"
const SelectBox = ({
	options,
	label,
	placeholder,
	height = 32,
	width = "100%",
	onChange,
	value,
	name,
}) => {
	console.log(options)
	const [showOptions, setShowOptions] = useState(false)
	const dropDownRef = useRef(null)
	const ctnRef = useRef(null)
	useClickOutside(dropDownRef, () => {
		setShowOptions(false)
	})
	const handleChange = (option) => {
		onChange({
			name,
			value: option.value,
			custom: true,
		})
		setShowOptions(false)
	}

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
	return (
		<div className="select-box2" style={{ width }}>
			<StyledText small semiBold maxLines="1">
				{label}
			</StyledText>
			<div
				className="select-box2__options-ctn"
				ref={dropDownRef}
				style={{
					width,
				}}
			>
				<Button
					onClick={() => {
						setShowOptions(!showOptions)
					}}
					width="100%"
					height={height}
					predefinedStyle={value !== undefined ? "primary" : "grey"}
					radius={showOptions ? "5px 5px 0 0" : 5}
				>
					{value != null
						? options.find((option) => option.value === value).name
						: placeholder}
				</Button>
				<div
					className={`select-box2__options ${showOptions ? "visible" : ""}`}
					ref={ctnRef}
					style={{
						width,
					}}
				>
					{options.map((option) => (
						<Button
							key={option.name}
							width="100%"
							height={height}
							onClick={() => {
								handleChange(option)
							}}
							radius="0"
							predefinedStyle={
								value === option.value ? "primary" : "light-grey"
							}
						>
							{option.name}
						</Button>
					))}
				</div>
			</div>
		</div>
	)
}

export default SelectBox
