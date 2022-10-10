import { useContext } from "react"
import { StoreContext } from "../store/StoreProvider"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"

const AppRouter = () => {
  const { store } = useContext(StoreContext)
  const { token } = store
  console.log({ store })
  return token ? <PrivateRoutes /> : <PublicRoutes />
}

export default AppRouter
