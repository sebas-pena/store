import { useContext } from "react"
import { StoreContext } from "../../store/StoreProvider"
import { ReactComponent as LogoutIcon } from "../../assets/svg/logout-icon.svg"
import Button from "../button/Button"
import StyledText from "../styled-text/StyledText"
import AsideItem from "./aside-item/AsideItem"
import AsideMarca from "./aside-marca/AsideMarca"
import "./Aside.css"

const Aside = () => {
	const { dispatch, store } = useContext(StoreContext)
	const { user } = store
	const handleLogout = () => {
		sessionStorage.clear()
		localStorage.clear()
		dispatch({ type: "LOGOUT" })
	}

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

	return (
		<aside className="aside__ctn">
			<AsideMarca />
			<ul className="aside__menu">
				{routes.map((route, index) => (
					<li key={index}>
						<AsideItem {...route} />
					</li>
				))}
			</ul>
			<div className="aside__user">
				<img
					className="aside__user-img"
					src={user.profileImage}
					alt="astro shop"
				/>
				<div className="aside__user-name">
					<p>{user.storeName}</p>
					<p>#{user._id}</p>
				</div>
				<button onClick={handleLogout} className="aside__logout-btn">
					<LogoutIcon height="20px" fill="#ed0856" />
				</button>
			</div>
		</aside>
	)
}

export default Aside
