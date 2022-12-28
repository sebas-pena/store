import { useState, useEffect } from "react"
import { useForm } from "../../../../hooks/useForm"
import FlexContainer from "../../../atoms/Container/FlexContainer"
import InputWithLabelInside from "../../../molecules/Inputs/LabelInside/InputWithLabelInside"
import Text from "../../../atoms/Text/Text"
import Button from "../../../atoms/Button/Button"
import CheckBox from "../../../atoms/CheckBox/CheckBox"
import Link from "../../../atoms/Link/Link"
import AuthWelcome from "../../../molecules/AuthWelcome/AuthWelcome"
import { useAstro } from "../../../../hooks/useAstro"
import "./LoginForm.css"
import { useDispatch } from "react-redux"
import { login } from "../../../../features/auth/authSlice"
import { useNavigate } from "react-router-dom"

export const LoginForm = () => {
	const [showError, setShowError] = useState(false)
	const [{ isLoading, data, error }, fetchAstro] = useAstro()
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { values, handleChange } = useForm({
		email: "astro@astro.com",
		password: "Astro1234@",
		keepLoggedIn: false,
	})

	const { email, password, keepLoggedIn } = values

	useEffect(() => {
		setShowError(false)
	}, [values])

	useEffect(() => {
		if (data) {
			console.log(data)
			dispatch(login(data.user))
			if (keepLoggedIn) localStorage.setItem("token", data.token)
			else sessionStorage.setItem("token", data.token)
			navigate("/")
		}
		if (error) {
			console.log(error)
			setShowError(true)
		}
	}, [data, error])

	const handleLogin = (e) => {
		e.preventDefault()
		if (isLoading || showError) return

		if (email === "" || password === "") return
		setShowError(false)
		fetchAstro({
			endpoint: "auth/login",
			method: "POST",
			body: {
				email,
				password,
			},
		})
	}

	return (
		<FlexContainer
			maxWidth={880}
			height={500}
			className="login-page__ctn"
			relative
		>
			<AuthWelcome />
			<FlexContainer
				as="form"
				onSubmit={handleLogin}
				flex={1}
				vertical
				gap={20}
				center
				background="#fff"
				radius="0 10px 10px 0"
			>
				<Text color="#e4003a" size={24} heavy>
					Login
				</Text>
				<InputWithLabelInside
					label="Email"
					name="email"
					type="email"
					onChange={handleChange}
					value={email}
					maxWidth={280}
					error={showError}
				/>
				<InputWithLabelInside
					label="Password"
					name="password"
					onChange={handleChange}
					value={password}
					type="password"
					maxWidth={280}
					error={showError}
				/>
				{showError && (
					<Text className="login-form__error" color="#e4003a">
						{error.message}
					</Text>
				)}
				<CheckBox
					text="Keep me logged in."
					height={45}
					value={keepLoggedIn}
					name="keepLoggedIn"
					checked={keepLoggedIn}
					onChange={handleChange}
				/>
				<Button
					height={32}
					maxWidth={280}
					disabled={isLoading}
					disabledForLoading
				>
					Login
				</Button>
				<FlexContainer gap={5}>
					<Text>Need an account?</Text>
					<Link to="/auth/signup">Sign Up</Link>
				</FlexContainer>
			</FlexContainer>
		</FlexContainer>
	)
}
