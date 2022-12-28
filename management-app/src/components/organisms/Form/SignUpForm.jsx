import React from "react"
import { useForm } from "../../../hooks/useForm"
import FlexContainer from "../../atoms/Container/FlexContainer"
import InputWithLabelInside from "../../molecules/Inputs/LabelInside/InputWithLabelInside"
import Text from "../../atoms/Text/Text"
import Button from "../../atoms/Button/Button"
import Link from "../../atoms/Link/Link"
import AuthWelcome from "../../molecules/AuthWelcome/AuthWelcome"

export const SignUpForm = () => {
	const { values, handleChange } = useForm({
		email: "",
		password: "",
		storeName: "",
	})
	const { email, password, storeName } = values
	return (
		<FlexContainer
			maxWidth={880}
			height={500}
			className="login-page__ctn"
			relative
		>
			<AuthWelcome />
			<FlexContainer
				flex={1}
				vertical
				gap={20}
				center
				background="#fff"
				radius="0 10px 10px 0"
			>
				<Text color="#e4003a" size={24} heavy>
					Sign Up
				</Text>
				<InputWithLabelInside
					label="Store Name"
					name="storeName"
					onChange={handleChange}
					value={storeName}
					icon="Store"
					maxWidth={280}
				/>
				<InputWithLabelInside
					label="Email"
					name="email"
					type="email"
					onChange={handleChange}
					value={email}
					maxWidth={280}
				/>
				<InputWithLabelInside
					label="Password"
					name="password"
					onChange={handleChange}
					value={password}
					type="password"
					maxWidth={280}
				/>
				<Button height={32} maxWidth={280}>
					Sign Up
				</Button>
				<FlexContainer gap={5}>
					<Text>Alredy have an account?</Text>
					<Link to="/auth/login">Login</Link>
				</FlexContainer>
			</FlexContainer>
		</FlexContainer>
	)
}
