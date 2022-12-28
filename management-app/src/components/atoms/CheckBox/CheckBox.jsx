import React from "react"
import FlexContainer from "../Container/FlexContainer"
import "./CheckBox.css"
const CheckBox = ({ id, name, text, onChange, checked, height = 35 }) => {
	return (
		<FlexContainer height={height} align="center">
			<input
				id={name}
				type="checkbox"
				name={name}
				onChange={(e) => {
					onChange({
						custom: true,
						name,
						value: e.target.checked,
					})
				}}
				checked={checked}
			/>
			<label htmlFor={name}>
				<span></span>
				{text}
				<ins>
					<i>{text}</i>
				</ins>
			</label>
		</FlexContainer>
	)
}

export default CheckBox
