import { useContext } from "react"
import { StoreContext } from "../store/StoreProvider"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"

const AppRouter = () => {
  let isLoggedIn
  let token =
    useContext(StoreContext).token || JSON.parse(localStorage.getItem("token"))
  if (token) isLoggedIn = token.expireTimestamp > +new Date()
  else isLoggedIn = false

  // UNCOMMENT THE LINE BELOW TO FORCE LOGIN
  // isLoggedIn = false

  /* return isLoggedIn ? <PrivateRoutes /> : <PublicRoutes /> */
  return <PrivateRoutes />
}

export default AppRouter
