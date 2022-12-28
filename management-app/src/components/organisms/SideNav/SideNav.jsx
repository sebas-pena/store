import React from "react"
import FlexContainer from "../../atoms/Container/FlexContainer"
import AsideHeader from "../../molecules/AsideHeader/AsideHeader"
import AsideLink from "../../molecules/AsideLink/AsideLink"
import AsideUser from "../../molecules/AsideUser/AsideUser"
/* ICONS */
const routes = [
	{
		path: "/",
		icon: "Dashboard",
		title: "Dashboard",
	},
	{
		path: "/products",
		icon: "Product",
		title: "Products",
	},
	{
		path: "/orders",
		icon: "Cart",
		title: "Orders",
	},
	{
		path: "/suppliers",
		icon: "Truck",
		title: "Suppliers",
	},
	{
		path: "/support",
		icon: "Support",
		title: "Support Chat",
	},
	{
		path: "/settings",
		icon: "Settings",
		title: "Settings",
	},
]

const SideNav = () => {
	return (
		<FlexContainer
			vertical
			background="#f5f7fb"
			width={250}
			borderR="1px solid #dbdbdb"
		>
			<AsideHeader />
			<FlexContainer vertical gap={13} flex="1" as="nav">
				{routes.map((route) => (
					<AsideLink key={route.title} {...route}></AsideLink>
				))}
			</FlexContainer>
			<AsideUser />
		</FlexContainer>
	)
}

export default SideNav
