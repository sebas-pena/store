import { useState, useEffect } from "react"

import { ReactComponent as ArrowIcon } from "../../assets/svg/arrow.svg"
import "./SelectBox.css"
const SelectBox = ({
	placeholder = "select option",
	options = [],
	handleChange = () => {},
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [value, setValue] = useState(null)

	useEffect(() => {
		const handleClickOutside = () => {
			if (isOpen) setIsOpen(false)
		}
		document.addEventListener("click", handleClickOutside)
		return () => {
			document.removeEventListener("click", handleClickOutside)
		}
	}, [isOpen])

	const handleOpenBox = (e) => {
		e.stopPropagation()
		setIsOpen(!isOpen)
	}

	const handleSelectOption = (option) => {
		setValue(option)
		handleChange(option)
	}

	return (
		<div className={`select-box__ctn ${isOpen ? "open" : "close"}`}>
			<div
				className={`select-box__placeholder ${value ? "defined" : "undefined"}`}
			>
				{placeholder}
			</div>
			<div className="select-box__selected" onClick={handleOpenBox}>
				<span>{value || placeholder}</span>
				<ArrowIcon className="select-box__arrow" width="15" height="15" />
			</div>
			<ul className={` select-box__options ${isOpen ? "open" : "close"}`}>
				{options.map((option, index) => (
					<li
						key={index}
						className={`select-box__option ${
							option === value ? "selected" : ""
						}`}
						onClick={() => {
							handleSelectOption(option)
						}}
					>
						{option}
					</li>
				))}
			</ul>
		</div>
	)
}

export default SelectBox
