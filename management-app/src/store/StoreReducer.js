export const initialStore = {
  title: "Login",
  token: null,
  user: null,
}

export const StoreReducer = (state, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload }
    case "SET_USER":
      return { ...state, user: action.payload }
    case "SET_TOKEN":
      return { ...state, token: action.payload }
    default:
      return state
  }
}
