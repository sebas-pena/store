import React from "react"
import FlexContainer from "../../atoms/Container/FlexContainer"

const routes = [
	{
		path: "/",
		icon: "dashboard",
		title: "Dashboard",
	},
	{
		path: "/products",
		icon: "product",
		title: "Products",
	},
	{
		path: "/orders",
		icon: "cart",
		title: "Orders",
	},
	{
		path: "/suppliers",
		icon: "truck",
		title: "Suppliers",
	},
	{
		path: "/support",
		icon: "support",
		title: "Support Chat",
	},
	{
		path: "/settings",
		icon: "settings",
		title: "Settings",
	},
]
const AsideNav = () => {
	return (
		<FlexContainer as="nav" flex="1" background="green">
			<FlexContainer as="ul" vertical></FlexContainer>
		</FlexContainer>
	)
}

export default AsideNav
