export const initialStore = {
	user: null,
	title: "",
}

export const StoreReducer = (state, action) => {
	switch (action.type) {
		case "SET_TITLE":
			return { ...state, title: action.payload }
		default:
			return state
	}
}