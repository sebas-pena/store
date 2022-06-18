import { useContext } from "react"
import { StoreContext } from "../store/StoreProvider"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"

const AppRouter = () => {
  const { store } = useContext(StoreContext)
  const { user } = store
  console.log("user", user)
  return user ? <PrivateRoutes /> : <PublicRoutes />
}

export default AppRouter
