import React, { useContext, useEffect, useState, useRef } from "react"
import { ReactComponent as AmazonIcon } from "../../assets/svg/amazon-icon.svg"
import { ReactComponent as MeliIcon } from "../../assets/svg/meli-hands.svg"
import Button from "../../components/button/Button"
import OauthButton from "../../components/button/oauth-button/OauthButton"
import Input from "../../components/input/Input"
import { useForm } from "../../hooks/useForm"
import { StoreContext } from "../../store/StoreProvider"
import { ReactComponent as CameraIcon } from "../../assets/svg/camera.svg"
import "./SettingsPage.css"
import imageFileToUrl from "../../helpers/imageFileToUrl"
import fetchAstro from "../../helpers/fetchAstro"
import { resizeImageFile } from "../../helpers/resizeImageFile"
import StyledText from "../../components/styled-text/StyledText"
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
		<div className="settings-page__ctn">
			<form
				onSubmit={handleSubmit}
				ref={formRef}
				className="settings-page__form"
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
				<StyledText asHeader={2} big semiBold color="#000">
					Account
				</StyledText>
				<div className="settins-page__inputs-ctn">
					<Input
						label="Store Name"
						name="storeName"
						value={storeName}
						onChange={handleChange}
						placeholder="Store Name"
						width="250px"
					/>
					<Input
						label="Email"
						name="email"
						value={email}
						onChange={handleChange}
						placeholder="example@mail.com"
						width="250px"
					/>
					<Input
						label="City, Country"
						name="address"
						value={address}
						onChange={handleChange}
						placeholder="Montevideo, Uruguay"
						width="250px"
					/>
				</div>
				<div className="settins-page__inputs-ctn">
					<Input
						label="New Password"
						name="newPassword"
						value={newPassword}
						onChange={handleChange}
						placeholder="Password"
						width="250px"
					/>
					<Input
						label="Confirm Password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={handleChange}
						placeholder="Confirm Password"
						width="250px"
					/>
				</div>
				<div className="settings-page__divisor"></div>
				<StyledText asHeader={2} big semiBold color="#000">
					Integrate Application
				</StyledText>
				<div className="settins-page__inputs-ctn">
					<Input
						label="Base URI"
						name="backendUri"
						value={backendUri}
						onChange={handleChange}
						placeholder="https://domain.com/api/"
						width="250px"
					/>
					<Input
						label="API Key"
						name="backendToken"
						value={backendToken}
						onChange={handleChange}
						placeholder="Bearer Token"
						width="250px"
					/>
				</div>
				<div className="settins-page__inputs-ctn">
					<Input
						label="Orders Endpoint"
						name="ordersEndpoint"
						value={ordersEndpoint}
						onChange={handleChange}
						placeholder="orders"
						width="250px"
					/>
					<Input
						label="Products Endpoint"
						name="productsEndpoint"
						value={productsEndpoint}
						onChange={handleChange}
						placeholder="products"
						width="250px"
					/>
					<Input
						label="Suppliers Endpoint"
						name="suppliersEndpoint"
						value={suppliersEndpoint}
						onChange={handleChange}
						placeholder="suppliers"
						width="250px"
					/>
					<Input
						label="Customers Endpoint"
						name="customersEndpoint"
						value={customersEndpoint}
						onChange={handleChange}
						placeholder="customers"
						width="250px"
					/>
					<Input
						label="Support Endpoint"
						name="supportEndpoint"
						value={supportEndpoint}
						onChange={handleChange}
						placeholder="support"
						width="250px"
					/>
				</div>
				<div className="settings-page__link">
					<span>
						Endpoints are appended to your Base URL to handle specific actions.
						They should be unique.
					</span>
					<a href="www.google.com">More info</a>
				</div>
				<div className="settings-page__divisor"></div>
				<StyledText asHeader={2} big semiBold color="#000">
					Integrate Third Party
				</StyledText>
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
				<StyledText asHeader={2} big semiBold color="#000">
					Delete Account
				</StyledText>
				<Button
					predefinedStyle="danger"
					height="35px"
					width="max-content"
					type="button"
					onClick={handleDeleteAccount}
				>
					Delete Account
				</Button>
				<div className="settings-page__bottom-buttons">
					<Button
						height="35px"
						width="150px"
						onClick={handleResetForm}
						predefinedStyle="grey"
					>
						Revert
					</Button>
					<Button height="35px" width="150px" type="submit">
						Apply changes
					</Button>
				</div>
			</form>
		</div>
	)
}

export default SettingsPage
