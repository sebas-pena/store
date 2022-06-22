export const initialStore = {
  user: null,
  title: "",
}

export const StoreReducer = (state, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload }
    case "SET_USER":
      return { ...state, user: action.payload }
    default:
      return state
  }
}
