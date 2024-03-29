export const StoreReducer = (state, action) => {
	switch (action.type) {
		case "SET_TITLE":
			return { ...state, title: action.payload }
		case "SET_USER":
			return { ...state, user: action.payload }
		case "SET_TOKEN":
			return { ...state, token: action.payload }
		case "SET_SETTINGS":
			return { ...state, settings: action.payload }
		case "LOGOUT":
			return {
				title: "login",
				token: null,
				user: null,
				settings: {}
			}
		default:
			return state
	}
}
