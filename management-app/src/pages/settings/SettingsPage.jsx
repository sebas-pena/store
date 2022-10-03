import React, { useContext, useEffect } from "react"
import { StoreContext } from "../../store/StoreProvider"
import "./SettingsPage.css"
const SettingsPage = () => {
	const { dispatch } = useContext(StoreContext)

	useEffect(() => {
		dispatch({ type: "SET_TITLE", payload: "Settings" })
	}, [])

	return <div className="settings-page__ctn">AJUSTES</div>
}

export default SettingsPage
