import { Routes, Route } from "react-router-dom"
import DashboardPage from "../pages/DashboardPage"
import OrdersPage from "../pages/OrdersPage"
import ProductsPage from "../pages/ProductsPage"
import StockPage from "../pages/StockPage"

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<DashboardPage />} />
			<Route path="/products" element={<ProductsPage />} />
			<Route path="/orders" element={<OrdersPage />} />
			<Route path="/stock" element={<StockPage />} />
		</Routes>
	)
}

export default AppRouter
