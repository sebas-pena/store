import { useContext, useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import { SocketContext, socket } from "./context/socket"
import AppRouter from "./router/AppRouter"
import { StoreContext, StoreProvider } from "./store/StoreProvider"

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <StoreProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </StoreProvider>
    </SocketContext.Provider>
  )
}

export default App
