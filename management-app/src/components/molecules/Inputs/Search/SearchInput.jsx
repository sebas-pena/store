import React from "react"
import FlexContainer from "../../atoms/Container/FlexContainer"
import { Magnify } from "../../atoms/Icons"
import "./SearchInput.css"
const SearchInput = ({ ...props }) => {
	return (
		<FlexContainer
			as="label"
			align="center"
			gap={10}
			height={32}
			padding="0 8px"
			className="search-input"
			radius={5}
			background="#fafafa"
		>
			<Magnify height="15" fill="#333" />
			<input {...props} />
		</FlexContainer>
	)
}

export default SearchInput
