import { Route, Routes } from "react-router-dom"
import SideNav from "../components/organisms/SideNav/SideNav"
import TitleBar from "../components/titlebar/TitleBar"
import DashboardPage from "../pages/dashboard/DashboardPage"
import Error404Page from "../pages/Error404/Error404Page"
import NewProductPage from "../pages/new-product/NewProductPage"
import OauthPage from "../pages/oauth/OauthPage"
import OrdersPage from "../pages/orders/OrdersPage"
import ProductsPage from "../pages/products/ProductsPage"
import SettingsPage from "../pages/settings/SettingsPage"
import SuppliersPage from "../pages/suppliers/SuppliersPage"

const AddAsideAndTitleBar = ({ children }) => <div className="App">
  <SideNav />
  <div className="app__ctn">
    <TitleBar />
    {children}
  </div>
</div>



const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
        <AddAsideAndTitleBar>
          <DashboardPage />
        </AddAsideAndTitleBar>} />
      <Route path="/oauth/:provider" element={<OauthPage />} />
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
      <Route path="/new-product" element={<NewProductPage />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>

  )
}

export default PrivateRoutes
