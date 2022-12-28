import { ReactComponent as AlertIcon } from "../../assets/svg/alert.svg"
import { ReactComponent as AmazonIcon } from "../../assets/svg/amazon-icon.svg"
import { ReactComponent as ArrowIcon } from "../../assets/svg/arrow.svg"
import { ReactComponent as BrokeCableIcon } from "../../assets/svg/broken-power-cable.svg"
import { ReactComponent as CableIcon } from "../../assets/svg/power-cable.svg"
import { ReactComponent as PlugIcon } from "../../assets/svg/plug.svg"
import { ReactComponent as CameraIcon } from "../../assets/svg/camera.svg"
import { ReactComponent as CartIcon } from "../../assets/svg/cart.svg"
import { ReactComponent as CashIcon } from "../../assets/svg/cash.svg"
import { ReactComponent as CardIcon } from "../../assets/svg/card.svg"
import { ReactComponent as CopyIcon } from "../../assets/svg/copy.svg"
import { ReactComponent as CrossIcon } from "../../assets/svg/cross1.svg"
import { ReactComponent as DashboardIcon } from "../../assets/svg/dashboard.svg"
import { ReactComponent as EllipsisIcon } from "../../assets/svg/elipsis.svg"
import { ReactComponent as EyeIcon } from "../../assets/svg/eye.svg"
import { ReactComponent as PenIcon } from "../../assets/svg/pen.svg"
import { ReactComponent as ServicesIcon } from "../../assets/svg/services.svg"
import { ReactComponent as SettingsIcon } from "../../assets/svg/settings.svg"
import { ReactComponent as SupportIcon } from "../../assets/svg/support-icon.svg"
import { ReactComponent as StockIcon } from "../../assets/svg/stock.svg"
import { ReactComponent as TruckIcon } from "../../assets/svg/truck.svg"
import { ReactComponent as ProductIcon } from "../../assets/svg/product.svg"
import { ReactComponent as AtIcon } from "../../assets/svg/at.svg"
import { ReactComponent as LockIcon } from "../../assets/svg/lock.svg"
import { ReactComponent as StoreIcon } from "../../assets/svg/store.svg"
import { ReactComponent as TriangleIcon } from "../../assets/svg/triangle.svg"
import { ReactComponent as MagnifyIcon } from "../../assets/svg/magnify.svg"
import { ReactComponent as PlusIcon } from "../../assets/svg/plus.svg"
import { ReactComponent as TrashIcon } from "../../assets/svg/trash.svg"
const rotate = {
	up: "",
	rigth: "rotate(90deg)",
	down: "rotate(180deg)",
	left: "rotate(-90deg)",
}

export const Alert = AlertIcon
export const Amazon = AmazonIcon
export const Arrow = ArrowIcon
export const BrokeCable = BrokeCableIcon
export const Eye = EyeIcon
export const Card = CardIcon
export const Cart = CartIcon
export const Copy = CopyIcon
export const Camera = CameraIcon
export const Cash = CashIcon
export const Cross = CrossIcon
export const Dashboard = DashboardIcon
export const Ellipsis = EllipsisIcon
export const Pen = PenIcon
export const Cable = CableIcon
export const Plug = PlugIcon
export const Settings = SettingsIcon
export const Services = ServicesIcon
export const Support = SupportIcon
export const Truck = TruckIcon
export const Stock = StockIcon
export const Product = ProductIcon
export const At = AtIcon
export const Magnify = MagnifyIcon
export const Lock = LockIcon
export const Plus = PlusIcon
export const Store = StoreIcon
export const Trash = TrashIcon
export const Triangle = ({ point, ...props }) => {
	const styles = {}
	point && (styles.transform = rotate[point])
	return <TriangleIcon style={styles} {...props} />
}

export default {
	Alert,
	Amazon,
	Arrow,
	BrokeCable,
	Eye,
	Card,
	Cart,
	Copy,
	Camera,
	Cash,
	Cross,
	Dashboard,
	Ellipsis,
	Pen,
	Cable,
	Plug,
	Settings,
	Services,
	Support,
	Truck,
	Stock,
	Product,
	At,
	Lock,
	Store,
	Trash,
	Triangle,
	Magnify,
	Plus,
}
