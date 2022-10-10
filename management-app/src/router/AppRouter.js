import { useLocation } from "react-router-dom"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"

const AppRouter = () => {
  const location = useLocation()
  const token = localStorage.getItem("token") || sessionStorage.getItem("token")

  return token ? <PrivateRoutes /> : <PublicRoutes />
}

export default AppRouter
