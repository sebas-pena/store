import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ReactComponent as DashboardIcon } from "../../../assets/svg/dashboard.svg"
import { ReactComponent as CartIcon } from "../../../assets/svg/cart.svg"
import { ReactComponent as ProductIcon } from "../../../assets/svg/product.svg"
import { ReactComponent as StockIcon } from "../../../assets/svg/stock.svg"
import { ReactComponent as SettingsIcon } from "../../../assets/svg/settings.svg"
import { ReactComponent as TruckIcon } from "../../../assets/svg/truck.svg"
import { ReactComponent as SupportIcon } from "../../../assets/svg/support-icon.svg"
import "./AsideItem.css"
import { StoreContext } from "../../../store/StoreProvider"

const icons = {
	dashboard: DashboardIcon,
	cart: CartIcon,
	product: ProductIcon,
	stock: StockIcon,
	settings: SettingsIcon,
	truck: TruckIcon,
	support: SupportIcon,
}
const AsideItem = ({ path, icon, title }) => {
	let Icon = icons[icon]
	const { dispatch } = useContext(StoreContext)

	const handleChangePage = () => {
		dispatch({ type: "SET_TITLE", payload: title })
	}
	return (
		<div className="aside-item__ctn">
			<NavLink to={path} className="aside-item__btn" onClick={handleChangePage}>
				<Icon width="20" height="20" />
				<span>{title}</span>
			</NavLink>
		</div>
	)
}

export default AsideItem
