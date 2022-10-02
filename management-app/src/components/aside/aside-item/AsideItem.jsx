import { NavLink } from "react-router-dom"
import { ReactComponent as DashboardIcon } from "../../../assets/svg/dashboard.svg"
import { ReactComponent as CartIcon } from "../../../assets/svg/cart.svg"
import { ReactComponent as ProductIcon } from "../../../assets/svg/product.svg"
import { ReactComponent as StockIcon } from "../../../assets/svg/stock.svg"
import { ReactComponent as SettingsIcon } from "../../../assets/svg/settings.svg"
import "./AsideItem.css"

const icons = {
	dashboard: DashboardIcon,
	cart: CartIcon,
	product: ProductIcon,
	stock: StockIcon,
	settings: SettingsIcon,
}
const AsideItem = ({ path, icon, title }) => {
	let Icon = icons[icon]

	return (
		<div className="aside-item__ctn">
			<NavLink to={path} className="aside-item__btn">
				<Icon width="20" height="20" />
				<span>{title}</span>
			</NavLink>
		</div>
	)
}

export default AsideItem
