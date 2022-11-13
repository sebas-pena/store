import { useState, useEffect, useRef } from "react"
import useClickOutside from "../../hooks/useClickOutside"
import Button from "../button/Button"
import "./DropDown.css"
const DropDown = ({
	options = [],
	cb,
	placeholder,
	width = "100%",
	className = "",
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const dropDownRef = useRef(null)
	const ctnRef = useRef(null)
	useClickOutside(dropDownRef, () => {
		setIsOpen(false)
	})
	useEffect(() => {
		const handlePositioningCtn = () => {
			console.log("scrolling")
			if (dropDownRef.current && ctnRef.current) {
				const optionsContainer = ctnRef.current
				const buttonPosition =
					dropDownRef.current.getBoundingClientRect().top + 35
				const ctnTop = optionsContainer.getBoundingClientRect().top
				const distance = ctnTop - buttonPosition
				const currentPosition = parseInt(
					window.getComputedStyle(optionsContainer).transform.split(",").pop()
				)
				optionsContainer.style.transform = `translateY(${
					currentPosition - distance
				}px)`
			}
		}
		if (dropDownRef.current && ctnRef.current) handlePositioningCtn()
		window.addEventListener("scroll", handlePositioningCtn, true)

		return () => {
			window.removeEventListener("scroll", handlePositioningCtn, true)
		}
	}, [dropDownRef, ctnRef])
	return (
		<div
			className={`dropdown ${className}`}
			ref={dropDownRef}
			style={{
				width,
			}}
		>
			<Button
				width="100%"
				onClick={(e) => {
					setIsOpen(!isOpen)
				}}
				height="35px"
				radius={isOpen ? "5px 5px 0 0" : 5}
			>
				{placeholder}
			</Button>
			<div
				className="dropdown__option-ctn"
				ref={ctnRef}
				style={{
					width,
				}}
			>
				{isOpen &&
					options.map((option, i) => (
						<Button
							predefinedStyle="grey"
							width="100%"
							onClick={() => {
								setIsOpen(false)
								cb(option, i)
							}}
							height="unset"
							paddingY="10px"
							radius="0"
						>
							{option.title}
						</Button>
					))}
			</div>
		</div>
	)
}

export default DropDown
