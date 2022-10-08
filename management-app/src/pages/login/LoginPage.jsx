import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { StoreContext } from "../../store/StoreProvider"
import LoginBackground from "../../assets/images/login-background.png"
// svgs, images and css below
import AppLogo from "../../assets/images/logo.png"
import "./LoginPage.css"
import CheckBox from "../../components/input/checkbox/CheckBox"
import Button from "../../components/button/Button"

const LoginPage = () => {
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	return (
		<div className="login-page">
			<ul className="login__background">
				<li></li>
				<li></li>
			</ul>
			<div className="login-page__ctn">
				<div className="login-page__welcome-ctn">
					<img src={LoginBackground} alt="background" />
					<div className="login-page__welcome">
						<figure className="login-page__logo-ctn">
							<img src={AppLogo} alt="logo" className="app logo" />
							<figcaption>AstroShop</figcaption>
						</figure>
						<h2>WELCOME BACK</h2>
					</div>
				</div>
				<div className="login-page__form">
					<h2>Login Account</h2>
					<input className="login-form__input" placeholder="Email or ID" />
					<input className="login-form__input" placeholder="Password" />
					<CheckBox text="keep me siggned in" id="keep-logged" />
					<Button width="100%" maxWidth="200px" height="35px">
						Login
					</Button>
				</div>
			</div>
		</div>
	)
}

export default LoginPage
