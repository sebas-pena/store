import { useContext } from "react"
import parseJWT from "../helpers/parseJWT"
import { StoreContext } from "../store/StoreProvider"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"

const AppRouter = () => {
  const { store } = useContext(StoreContext)
  const { token } = store

  let logged = false
  if (token) {
    logged = +new Date() < new Date(parseJWT(token).exp * 1000) ? true : false
  }
  return logged ? <PrivateRoutes /> : <PublicRoutes />
}

export default AppRouter
