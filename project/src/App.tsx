import { useState } from "react";


import Navbar from './components/homePage/NavBar'
import OperationBox from './components/homePage/OperationBox'
import BalanceBox from './components/homePage/BalanceBox'
import SendPage from './pages/SendPage'
import Footer from './components/homePage/Footer'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import RequestPage from './pages/RequestPage'
import BusinessRegistration from "./pages/views/registration/business-registration";
import ParticularRegistration from "./pages/views/registration/particular-registration";
import FrontPage from "./pages/views/front-page/front-page";
import Login from "./pages/views/login/login";
import ResetPassword from "./components/forms/resetPassword/ResetPassword";
import Reset from "./pages/views/reset/reset";
import Registration from "./pages/views/registration/particular-registration";
import InputField from "./shared/password-input/input-field";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className="contetnt">
      
      <Routes>
        <Route path='/dashboard' Component={Dashboard}></Route>
        <Route path='/send' Component={SendPage}></Route>
        <Route path='/request' Component={RequestPage}></Route>
        <Route path="/" element={<FrontPage />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route
        path="particularreg"
        element={<ParticularRegistration />}></Route>
      <Route
        path="businessreg"
        element={<BusinessRegistration />}></Route>
      <Route
        path="reset"
        element={<Reset/>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App;
