import { createContext, useReducer } from "react"
import { StoreReducer } from "./StoreReducer"

export const StoreContext = createContext()
export const StoreProvider = ({ children }) => {
	let token = localStorage.getItem("token") || null

	const initialStore = {
		title: "Login",
		token,
		user: null,
		settings: {},
	}

	const [store, dispatch] = useReducer(StoreReducer, initialStore)

	return (
		<StoreContext.Provider value={{ store, dispatch }}>
			{children}
		</StoreContext.Provider>
	)
}
