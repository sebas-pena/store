import { Navigate, Route, Routes } from "react-router-dom"
import AuthPage from "../pages/auth/AuthPage"

const PublicRoutes = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth/login" element={<AuthPage page="login" />} />
        <Route path="/auth/signup" element={<AuthPage page="signup" />} />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </div>
  )
}

export default PublicRoutes
