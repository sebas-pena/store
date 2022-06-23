import { Route, Routes } from "react-router-dom"
import Aside from "../components/aside/Aside"
import TitleBar from "../components/titlebar/TitleBar"
import DashboardPage from "../pages/dashboard/DashboardPage"
import OrdersPage from "../pages/orders/OrdersPage"
import ProductsPage from "../pages/products/ProductsPage"

const PrivateRoutes = () => {
  return (
    <div className="App">
      <Aside />
      <div className="app__ctn">
        <TitleBar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default PrivateRoutes
