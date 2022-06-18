import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/login-page/LoginPage"

const PublicRoutes = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LoginPage />} />
			</Routes>
		</div>
	)
}

export default PublicRoutes
