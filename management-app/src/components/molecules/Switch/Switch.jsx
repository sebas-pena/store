import React from "react"
import FlexContainer from "../../atoms/Container/FlexContainer"
import Text from "../../atoms/Text/Text"
import "./Switch.css"
const Switch = ({
	onChange,
	left,
	rigth,
	name,
	width = 70,
	removeSlash,
	removeBorder,
	background,
}) => {
	return (
		<FlexContainer
			gap={6}
			padding={3}
			radius={10}
			align="center"
			className={`switch__ctn ${removeBorder ? "border-off" : ""} ${
				removeSlash ? "" : "with-slash"
			}`}
			height={30}
			minWidth={width * 2 + 12}
			background={background}
		>
			<FlexContainer as="label" center radius={7} width={width} height="100%">
				<Text size={14}>{left.label}</Text>
				<input
					type="radio"
					name={name}
					onChange={onChange}
					value={left.value}
				/>
			</FlexContainer>
			{!removeSlash && <span>/</span>}
			<FlexContainer as="label" center radius={7} width={width} height="100%">
				<Text size={14}>{rigth.label}</Text>
				<input
					type="radio"
					name={name}
					onChange={onChange}
					value={rigth.value}
				/>
			</FlexContainer>
		</FlexContainer>
	)
}

export default Switch
