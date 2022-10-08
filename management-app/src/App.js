import { BrowserRouter } from "react-router-dom"
import AppRouter from "./router/AppRouter"
import { StoreProvider } from "./store/StoreProvider"

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
