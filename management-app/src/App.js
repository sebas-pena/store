import { BrowserRouter } from "react-router-dom"
import TitleBar from "./components/titlebar/TitleBar"
import Aside from "./components/aside/Aside"
import AppRouter from "./router/AppRouter"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TitleBar />
        <Aside />
        <main>
          <AppRouter />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
