import AsideItem from "./aside-item/AsideItem"
import AsideMarca from "./aside-marca/AsideMarca"
import "./Aside.css"

const Aside = () => {
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
		</aside>
	)
}

export default Aside
