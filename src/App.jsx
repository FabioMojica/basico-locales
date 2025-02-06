import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import HomeClient from "./pages/homeclient/HomeClient"

function App() {

  return (
    <BrowserRouter>
      <Header></Header>
      <div className="mt-18">
        <HomeClient></HomeClient>
      </div>
    </BrowserRouter>
  )
}

export default App
