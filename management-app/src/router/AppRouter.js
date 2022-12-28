import { useSelector } from "react-redux"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"

const AppRouter = () => {
  const { isLoggedIn } = useSelector(store => store.auth)
  return isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />
}

export default AppRouter
