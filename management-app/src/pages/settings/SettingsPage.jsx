import React, { useContext, useEffect, useState } from "react"
import { ReactComponent as AmazonIcon } from "../../assets/svg/amazon-icon.svg"
import { ReactComponent as MeliIcon } from "../../assets/svg/meli-hands.svg"
import Button from "../../components/button/Button"
import OauthButton from "../../components/button/oauth-button/OauthButton"
import Input from "../../components/input/Input"
import { useForm } from "../../hooks/useForm"
import { StoreContext } from "../../store/StoreProvider"
import "./SettingsPage.css"
const SettingsPage = () => {
	const { dispatch, store } = useContext(StoreContext)
	const [hasChanges, setHasChanges] = useState(false)
	const { user } = store
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
	} = values
	useEffect(() => {
		if (
			backendToken ||
			newPassword !== "" ||
			backendUri !== settings.backendUri ||
			ordersEndpoint !== settings.ordersEndpoint ||
			productsEndpoint !== settings.productsEndpoint ||
			suppliersEndpoint !== settings.suppliersEndpoint ||
			customersEndpoint !== settings.customersEndpoint ||
			supportEndpoint !== settings.supportEndpoint ||
			storeName !== user.storeName ||
			email !== user.email ||
			confirmPassword !== "" ||
			address !== "" ||
			backendToken !== ""
		) {
			setHasChanges(true)
		} else {
			setHasChanges(false)
		}
	}, [values])
	const handleSubmit = (e) => {
		e.preventDefault()

		/* dispatch({ type: "SET_SETTINGS", payload: values })
		changeInitialValues(values)
		localStorage.setItem("settigns", JSON.stringify(values)) */
	}

	return (
		<div className="settings-page__ctn">
			<form onSubmit={handleSubmit} className="settings-page__form">
				<div className="settings-page__progile-ctn">
					<img src={user.profileImage} alt={`${user.storeName} logo`} />
					<label>
						<input type="file" accept="image/*" />
					</label>
				</div>
				<h2 className="settings-page__header">Account</h2>
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
				<h2 className="settings-page__header">Integrate Application</h2>
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
				<h2 className="settings-page__header">Integrate Third Party</h2>
				<div className="settins-page__integrations-ctn">
					<OauthButton
						primary="#FF9A00"
						secondary="#fff"
						icon={<AmazonIcon width="25" height="25" />}
						text="Connect Amazon"
					/>
					<OauthButton
						primary="#1e77d9"
						secondary="#fff"
						icon={<MeliIcon width="25" height="25" />}
						text="Connect Mercado Libre"
					/>
				</div>
				<div className="settings-page__divisor"></div>
				<h2 className="settings-page__header">Delete Account</h2>
				<Button predefinedStyle="danger" height="35px" width="max-content">
					Delete Account
				</Button>
				<div className="settings-page__bottom-buttons">
					<Button
						height="35px"
						width="150px"
						onClick={resetForm}
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
