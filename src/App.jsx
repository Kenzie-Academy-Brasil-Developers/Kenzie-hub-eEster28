import { ToastContainer } from "react-toastify"
import { RoutesMain } from "./routes/RoutesMain"
import "react-toastify/dist/ReactToastify.css"
import "./styles/index.scss"

function App() {
  return (
    <>
      <RoutesMain />
      <ToastContainer position="top-right" autoClose={2 * 1000} theme="dark" />
    </>
  )
}

export default App
