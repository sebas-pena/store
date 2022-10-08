import React, { useContext, useEffect } from "react"
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
	const { settings } = store
	const { handleChange, values, resetForm, changeInitialValues } =
		useForm(settings)
	const {
		baseUri,
		ordersEndpoint,
		productsEndpoint,
		suppliersEndpoint,
		customersEndpoint,
		supportEndpoint,
	} = values

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch({ type: "SET_SETTINGS", payload: values })
		changeInitialValues(values)
		localStorage.setItem("settigns", JSON.stringify(values))
	}

	console.log(store)

	return (
		<form onSubmit={handleSubmit} className="settings-page__ctn">
			<h2 className="settings-page__header">Backend</h2>
			<Input
				label="Base URI"
				name="baseUri"
				value={baseUri}
				onChange={handleChange}
				placeholder="https://domain.com/api/"
				maxWidth="250px"
			/>
			<div className="settins-page__endpoints">
				<Input
					label="Orders Endpoint"
					name="ordersEndpoint"
					value={ordersEndpoint}
					onChange={handleChange}
					placeholder="orders"
					maxWidth="250px"
				/>
				<Input
					label="Products Endpoint"
					name="productsEndpoint"
					value={productsEndpoint}
					onChange={handleChange}
					placeholder="products"
					maxWidth="250px"
				/>
				<Input
					label="Suppliers Endpoint"
					name="suppliersEndpoint"
					value={suppliersEndpoint}
					onChange={handleChange}
					placeholder="suppliers"
					maxWidth="250px"
				/>
				<Input
					label="Customers Endpoint"
					name="customersEndpoint"
					value={customersEndpoint}
					onChange={handleChange}
					placeholder="customers"
					maxWidth="250px"
				/>
				<Input
					label="Support Endpoint"
					name="supportEndpoint"
					value={supportEndpoint}
					onChange={handleChange}
					placeholder="support"
					maxWidth="250px"
				/>
			</div>
			<a href="www.google.com">More info</a>
			<h2 className="settings-page__header">Integrations</h2>
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
			<div className="settings-page__bottom-buttons">
				<Button height="35px" width="150px" onClick={resetForm}>
					Revert
				</Button>
				<Button height="35px" width="150px" type="submit">
					Apply changes
				</Button>
			</div>
		</form>
	)
}

export default SettingsPage
