import { BrowserRouter } from "react-router-dom"
import { SocketContext, socket } from "./context/socket"
import AppRouter from "./router/AppRouter"
import { StoreContext, StoreProvider } from "./store/StoreProvider"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)


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
