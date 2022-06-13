import { Routes, Route } from "react-router-dom"
import DashboardPage from "../pages/DashboardPage"
import OrdersPage from "../pages/OrdersPage"
import ProductsPage from "../pages/ProductsPage"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/orders" element={<OrdersPage />} />
    </Routes>
  )
}

export default AppRouter
