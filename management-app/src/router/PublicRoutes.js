import { Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/login/LoginPage"

const PublicRoutes = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default PublicRoutes
