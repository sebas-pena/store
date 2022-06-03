import { BrowserRouter } from "react-router-dom"
import TitleBar from "./components/titlebar/TitleBar"
import Aside from "./components/aside/Aside"
import AppRouter from "./router/AppRouter"

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Aside />
				<div className="app__ctn">
					<TitleBar />
					<AppRouter />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
