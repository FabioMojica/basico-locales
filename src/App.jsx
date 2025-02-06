import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import HomeClient from "./pages/homeclient/HomeClient"
import Menu from "./pages/homeclient/components/Menu"

function App() {

  return (
    <BrowserRouter>
      <Header></Header>
      <div className="mt-18">
        <HomeClient></HomeClient>
        <Menu></Menu>
      </div>
    </BrowserRouter>
  )
}

export default App
