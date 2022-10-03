import React, { useContext, useEffect } from "react"
import { ReactComponent as AmazonIcon } from "../../assets/svg/amazon-icon.svg"
import { ReactComponent as MeliIcon } from "../../assets/svg/meli-hands.svg"
import OauthButton from "../../components/button/oauth-button/OauthButton"
import { StoreContext } from "../../store/StoreProvider"
import "./SettingsPage.css"
const SettingsPage = () => {
	const { dispatch } = useContext(StoreContext)

	useEffect(() => {
		dispatch({ type: "SET_TITLE", payload: "Settings" })
	}, [])

	return (
		<div className="settings-page__ctn">
			<h2 className="settings-page__header">Settings</h2>
			<h2 className="settings-page__header">Integrations</h2>
			<div>
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
		</div>
	)
}

export default SettingsPage
