import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import FlexContainer from "../../atoms/Container/FlexContainer"
import "./AsideLink.css"
import Icons from "../../atoms/Icons"
import Text from "../../atoms/Text/Text"
import { useEffect } from "react"
import Button from "../../atoms/Button/Button"

const AsideLink = ({ path, title, icon }) => {
	const Icon = Icons[icon]
	const location = useLocation()

	return (
		<NavLink to={path} className="aside-link">
			<Button
				palette={path === location.pathname ? "primary" : "gray"}
				as="div"
				margin="0 25px"
				padding="0 0 0 20px"
				align="left"
			>
				<FlexContainer height={45} gap={20} align="center">
					<Icon height="20" width="20" />
					<Text bold>{title}</Text>
				</FlexContainer>
			</Button>
		</NavLink>
	)
}

export default AsideLink
