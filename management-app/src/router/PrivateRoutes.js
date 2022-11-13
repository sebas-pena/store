import { Route, Routes } from "react-router-dom"
import Aside from "../components/aside/Aside"
import TitleBar from "../components/titlebar/TitleBar"
import DashboardPage from "../pages/dashboard/DashboardPage"
import OauthPage from "../pages/oauth/OauthPage"
import OrdersPage from "../pages/orders/OrdersPage"
import ProductsPage from "../pages/products/ProductsPage"
import SettingsPage from "../pages/settings/SettingsPage"
import SuppliersPage from "../pages/suppliers/SuppliersPage"

const AddAsideAndTitleBar = ({ children }) => <div className="App">
  <Aside />
  <div className="app__ctn">
    <TitleBar />
    {children}
  </div>
</div>


const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="oauth/:provider" element={<OauthPage />} />
      <Route path="/" element={
        <AddAsideAndTitleBar>
          <DashboardPage />
        </AddAsideAndTitleBar>}
      />
      <Route path="/products" element={
        <AddAsideAndTitleBar>
          <ProductsPage />
        </AddAsideAndTitleBar>
      } />
      <Route path="/orders" element={
        <AddAsideAndTitleBar>
          <OrdersPage />
        </AddAsideAndTitleBar>
      } />
      <Route path="/settings" element={
        <AddAsideAndTitleBar>
          <SettingsPage />
        </AddAsideAndTitleBar>
      } />
      <Route path="/suppliers" element={
        <AddAsideAndTitleBar>
          <SuppliersPage />
        </AddAsideAndTitleBar>
      } />
      <Route path="/support" element={
        <AddAsideAndTitleBar>
          <SuppliersPage />
        </AddAsideAndTitleBar>
      } />
    </Routes>

  )
}

export default PrivateRoutes
