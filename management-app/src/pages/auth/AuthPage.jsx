import React from "react"
import { LoginForm } from "../../components/organisms/Form/Login/LoginForm"
import { SignUpForm } from "../../components/organisms/Form/SignUpForm"
import "./AuthPage.css"
const AuthPage = ({ page }) => {
	return (
		<div className="auth-page">
			<ul className="auth__background">
				<li></li>
				<li></li>
			</ul>
			{page === "login" && <LoginForm />}
			{page === "signup" && <SignUpForm />}
		</div>
	)
}

export default AuthPage
