import { createContext, useReducer } from "react"
import parseJWT from "../helpers/parseJWT"
import { StoreReducer } from "./StoreReducer"

export const StoreContext = createContext()
export const StoreProvider = ({ children }) => {
	let token = localStorage.getItem("token") || sessionStorage.getItem("token")
	const parsedToken = token && parseJWT(token)
	const initialStore = {
		title: "",
		token,
		user: token && parsedToken.user,
		settings: token ? parsedToken.settings : {},
	}

	const [store, dispatch] = useReducer(StoreReducer, initialStore)

	return (
		<StoreContext.Provider value={{ store, dispatch }}>
			{children}
		</StoreContext.Provider>
	)
}
