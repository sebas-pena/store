import React, { useContext, useEffect, useState, useRef } from "react"
import { ReactComponent as AmazonIcon } from "../../assets/svg/amazon-icon.svg"
import { ReactComponent as MeliIcon } from "../../assets/svg/meli-hands.svg"
import Button from "../../components/atoms/Button/Button"
import OauthButton from "../../components/button/oauth-button/OauthButton"
import { useForm } from "../../hooks/useForm"
import { StoreContext } from "../../store/StoreProvider"
import { ReactComponent as CameraIcon } from "../../assets/svg/camera.svg"
import "./SettingsPage.css"
import imageFileToUrl from "../../helpers/imageFileToUrl"
import fetchAstro from "../../helpers/fetchAstro"
import { resizeImageFile } from "../../helpers/resizeImageFile"
import FlexContainer from "../../components/atoms/Container/FlexContainer"
import InputWithLabel from "../../components/molecules/Inputs/WithLabel/InputWithLabel"
import Container from "../../components/atoms/Container/Container"
import Text from "../../components/atoms/Text/Text"
const SettingsPage = () => {
	const { dispatch, store } = useContext(StoreContext)
	const { user, token } = store
	const [profileUrl, setProfileUrl] = useState(user.profileImage)
	const { settings } = user
	const { handleChange, values, resetForm, changeInitialValues } = useForm({
		...settings,
		email: user.email,
		storeName: user.storeName,
		password: "",
		newPassword: "",
		confirmPassword: "",
		address: user.address || "",
		backendToken: user.backendToken || "",
		profileImage: user.profileImage,
	})
	const {
		backendUri,
		ordersEndpoint,
		productsEndpoint,
		suppliersEndpoint,
		customersEndpoint,
		supportEndpoint,
		storeName,
		email,
		password,
		newPassword,
		confirmPassword,
		address,
		backendToken,
		profileImage,
	} = values
	const formRef = useRef(null)
	useEffect(() => {
		if (typeof profileImage === "object") {
			imageFileToUrl(profileImage, (url) => {
				setProfileUrl(url)
			})
		}
	}, [profileImage])

	const handleResetForm = () => {
		resetForm()
		setProfileUrl(user.profileImage)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const data = new FormData(formRef.current)
		if (data.getAll("profileImage")[0].size) {
			const image = await resizeImageFile(
				data.getAll("profileImage")[0],
				300,
				300
			)
			data.set("profileImage", image, "profile.png")
		}
		console.log("send")
		fetchAstro("user", {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: data,
		})
			.then((res) => console.log(res))
			.catch((err) => err.json())
			.then((res) => console.log(res))
		/* dispatch({ type: "SET_SETTINGS", payload: values })
		changeInitialValues(values)
		localStorage.setItem("settigns", JSON.stringify(values)) */
	}
	const handleDeleteAccount = () => {
		fetchAstro("user", {
			method: "DELETE",
			headers: {
				"Content-type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				vicky: "TONTA",
			}),
		})
	}

	return (
		<Container flex={1} overflow="auto" as="main">
			<FlexContainer
				as="form"
				padding={20}
				gap={20}
				vertical
				maxWidth={900}
				margin="0 auto"
				onSubmit={handleSubmit}
				ref={formRef}
			>
				<div className="settings-page__progile-ctn">
					<img src={profileUrl} alt={`${user.storeName} logo`} />
					<label>
						<CameraIcon width="30px" height="30px" fill="#fff" />
						<input
							type="file"
							accept="image/*"
							name="profileImage"
							onChange={handleChange}
						/>
					</label>
				</div>
				<Text as="h2" size={24} bold>
					Account
				</Text>

				<FlexContainer gap={20} wrap>
					<InputWithLabel
						label="Store Name"
						name="storeName"
						value={storeName}
						onChange={handleChange}
						placeholder="Store Name"
						width="250px"
					/>
					<InputWithLabel
						label="Email"
						name="email"
						value={email}
						onChange={handleChange}
						placeholder="example@mail.com"
						width="250px"
					/>
					<InputWithLabel
						label="City, Country"
						name="address"
						value={address}
						onChange={handleChange}
						placeholder="Montevideo, Uruguay"
						width="250px"
					/>
				</FlexContainer>
				<FlexContainer gap={20} wrap>
					<InputWithLabel
						label="New Password"
						name="newPassword"
						value={newPassword}
						onChange={handleChange}
						placeholder="Password"
						width="250px"
					/>
					<InputWithLabel
						label="Confirm Password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={handleChange}
						placeholder="Confirm Password"
						width="250px"
					/>
				</FlexContainer>
				<div className="settings-page__divisor"></div>
				<Text as="h2" size={24} bold>
					Integrate Application
				</Text>
				<FlexContainer gap={20} wrap>
					<InputWithLabel
						label="Base URI"
						name="backendUri"
						value={backendUri}
						onChange={handleChange}
						placeholder="https://domain.com/api/"
						width="250px"
					/>
					<InputWithLabel
						label="API Key"
						name="backendToken"
						value={backendToken}
						onChange={handleChange}
						placeholder="Bearer Token"
						width="250px"
					/>
				</FlexContainer>
				<FlexContainer gap={20} wrap>
					<InputWithLabel
						label="Orders Endpoint"
						name="ordersEndpoint"
						value={ordersEndpoint}
						onChange={handleChange}
						placeholder="orders"
						width="250px"
					/>
					<InputWithLabel
						label="Products Endpoint"
						name="productsEndpoint"
						value={productsEndpoint}
						onChange={handleChange}
						placeholder="products"
						width="250px"
					/>
					<InputWithLabel
						label="Suppliers Endpoint"
						name="suppliersEndpoint"
						value={suppliersEndpoint}
						onChange={handleChange}
						placeholder="suppliers"
						width="250px"
					/>
					<InputWithLabel
						label="Customers Endpoint"
						name="customersEndpoint"
						value={customersEndpoint}
						onChange={handleChange}
						placeholder="customers"
						width="250px"
					/>
					<InputWithLabel
						label="Support Endpoint"
						name="supportEndpoint"
						value={supportEndpoint}
						onChange={handleChange}
						placeholder="support"
						width="250px"
					/>
				</FlexContainer>
				<div className="settings-page__link">
					<span>
						Endpoints are appended to your Base URL to handle specific actions.
						They should be unique.
					</span>
					<a href="www.google.com">More info</a>
				</div>
				<div className="settings-page__divisor"></div>
				<Text as="h2" size={24} bold>
					Integrate Third Party
				</Text>
				<div className="settins-page__integrations-ctn">
					<OauthButton
						primary="#FF9A00"
						secondary="#fff"
						icon={<AmazonIcon width="25" height="25" />}
						text="Connect Amazon"
						oauthUri={process.env.REACT_APP_AMAZON_OAUTH}
					/>
					<OauthButton
						primary="#1e77d9"
						secondary="#fff"
						icon={<MeliIcon width="25" height="25" />}
						text="Connect Mercado Libre"
						oauthUri={process.env.REACT_APP_MELI_OAUTH}
					/>
				</div>
				<div className="settings-page__divisor"></div>
				<Text as="h2" size={24} bold>
					Integrate Third Party
				</Text>
				<Button
					palette="danger"
					padding="0 16px"
					height="32px"
					width="max-content"
					type="button"
					onClick={handleDeleteAccount}
				>
					Delete Account
				</Button>
				<div className="settings-page__bottom-buttons">
					<Button
						height="32px"
						width="150px"
						onClick={handleResetForm}
						palette="grey"
					>
						Revert
					</Button>
					<Button height="32px" width="150px" type="submit">
						Apply changes
					</Button>
				</div>
			</FlexContainer>
		</Container>
	)
}

export default SettingsPage
