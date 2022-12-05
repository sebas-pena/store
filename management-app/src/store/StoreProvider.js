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
		allowedCurrencies: [
			{ id: "USD", symbol: "U$S", name: "Dólar", decimal_places: 2 },
			{ id: "UYU", symbol: "$", name: "Peso Uruguayo", decimal_places: 2 }
		],
		integersSeparator: Number(10000).toLocaleString().charAt(2),
		decimalSeparator: Number(1.1).toLocaleString().charAt(1)
	}
	const [store, dispatch] = useReducer(StoreReducer, initialStore)

	return (
		<StoreContext.Provider value={{ store, dispatch }}>
			{children}
		</StoreContext.Provider>
	)
}
