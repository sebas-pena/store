import logo from "../../../assets/images/logo.png"
import "./AsideMarca.css"
const AsideMarca = () => {
	return (
		<div className="aside-marca__ctn">
			<img className="aside-marca__logo" src={logo} alt="logo" />
			<h1 className="aside-marca__name">AstroShop</h1>
		</div>
	)
}

export default AsideMarca
