import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { StoreContext } from "../../store/StoreProvider"
import LoginBackground from "../../assets/images/login-background.png"
// svgs, images and css below
import AppLogo from "../../assets/images/logo.png"
import "./LoginPage.css"
import CheckBox from "../../components/input/checkbox/CheckBox"
import Button from "../../components/button/Button"
import fetchAstro from "../../helpers/fetchAstro"
import { useForm } from "../../hooks/useForm"

const LoginPage = () => {
	const [showSignUp, setShowSignUp] = useState(false)
	const { handleChange, values, resetForm } = useForm({
		name: "",
		email: "",
		storeName: "",
		password: "",
		keepSignned: false,
	})
	const { dispatch } = useContext(StoreContext)
	const { email, storeName, password, keepSignned } = values
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		if (isLoading) return

		setIsLoading(true)

		let response

		if (showSignUp) {
			response = fetchAstro("auth/signup", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({
					email: email,
					password,
					"store-name": storeName,
				}),
			})
		} else {
			response = fetchAstro("auth/login", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
				}),
			})
		}

		response
			.then(({ token, user }) => {
				dispatch({ action: "SET_TOKEN", payload: token })
				dispatch({ action: "SET_USER", payload: user })
				if (keepSignned) {
					localStorage.setItem("token", token)
				} else {
					sessionStorage.setItem("token", token)
				}
				navigate("/")
			})
			.catch((error) => {
				error.json().then((data) => console.log(data))
			})
			.finally(() => {
				setIsLoading(false)
			})
	}
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
				<form className="login-page__form" onSubmit={handleSubmit}>
					<h2>{showSignUp ? "Create Account" : "Login"} </h2>
					{showSignUp ? (
						<>
							<input
								className="login-form__input"
								placeholder="Store Name"
								onChange={handleChange}
								name="storeName"
								value={storeName}
							/>
							<input
								className="login-form__input"
								placeholder="Email"
								onChange={handleChange}
								name="email"
								value={email}
							/>
							<input
								className="login-form__input"
								placeholder="Password"
								onChange={handleChange}
								name="password"
								type="password"
								value={password}
							/>
						</>
					) : (
						<>
							<input
								className="login-form__input"
								placeholder="Email"
								onChange={handleChange}
								name="email"
								value={email}
							/>
							<input
								className="login-form__input"
								placeholder="Password"
								onChange={handleChange}
								name="password"
								value={password}
								type="password"
							/>
							<CheckBox
								text="keep me siggned in"
								id="keep-logged"
								height="40px"
								onChange={handleChange}
								name="keepSignned"
								checked={keepSignned}
							/>
						</>
					)}
					<Button
						width="100%"
						maxWidth="200px"
						height="35px"
						type="submit"
						predefinedStyle="primary"
						color="#fff"
						disabled={isLoading}
					>
						{showSignUp ? "Sign Up" : "Login"}
					</Button>
					<div>
						<span>
							{showSignUp ? "Alredy have an account?" : "Need an account?"}
						</span>
						<Button
							predefinedStyle="simple"
							maxWidth="200px"
							height="35px"
							paddingX="5px"
							color="#3A78F2"
							colorHover="#2564e0"
							onClick={() => {
								if (isLoading) return
								setShowSignUp(!showSignUp)
								resetForm()
							}}
						>
							{showSignUp ? "Login" : "Sign Up"}
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default LoginPage
