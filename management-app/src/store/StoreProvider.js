import { createContext, useReducer } from "react"
import { initialStore, StoreReducer } from "./StoreReducer"

export const StoreContext = createContext()
export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(StoreReducer, initialStore)
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}
