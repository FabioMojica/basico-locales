import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import HomeClient from "./pages/homeclient/HomeClient"
import Login from "./pages/login/Login"

function App() {
  const isLoginPage = location.pathname === "/login";

  return (
    <BrowserRouter>
      {!isLoginPage && <Header />}
      <div className={`${isLoginPage ? "mt-0" : "mt-18"}`}>
        <Routes>
          <Route path="/" element={<HomeClient />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
