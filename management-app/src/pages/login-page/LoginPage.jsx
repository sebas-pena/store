// svgs, images and css below
import AppLogo from "../../assets/images/logo.png"
import MeliLogo from "../../assets/images/logos/meli-logo.png"
import ButtonWithImage from "../../components/button/button-with-image/ButtonWithImage"
import "./LoginPage.css"
const LoginPage = () => {
	const startOauth = window.electron.startOauth

	return (
		<div className="login-page">
			<div className="login-page__ctn">
				<picture className="login-page__logo-ctn">
					<img src={AppLogo} alt="logo" className="app logo" />
					<caption>AstroShop</caption>
				</picture>
				<p className="login-page__oauth-title">Continue with</p>
				<ButtonWithImage
					onClick={() => {
						startOauth("meli")
					}}
				>
					<img src={MeliLogo} alt="logo de mercado libre" />
					<span>Mercado Libre</span>
				</ButtonWithImage>
			</div>
		</div>
	)
}

export default LoginPage
