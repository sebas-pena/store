import React from "react"
import Button from "../atoms/Button/Button"
import Container from "../atoms/Container/Container"
import FlexContainer from "../atoms/Container/FlexContainer"
import Text from "../atoms/Text/Text"

const ToggleOptions = ({ label, options = [], onChange, value }) => {
	return (
		<Container>
			<Text size={16}>{label}</Text>
			<FlexContainer gap={10} inline marginT={5}>
				{options.map((option) => (
					<Button
						height={32}
						padding="0 16px"
						onClick={() => onChange(option)}
						palette={value === option ? "primary" : "grey"}
					>
						{option}
					</Button>
				))}
			</FlexContainer>
		</Container>
	)
}

export default ToggleOptions
