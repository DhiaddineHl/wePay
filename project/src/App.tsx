import { useState } from 'react'

import BusinessForm from './components/forms/businessForm'
import LoginForm from './components/forms/LoginForm'
import ParticularForm from './components/forms/particularForm'
import Navbar from './components/homePage/NavBar'
import OperationBox from './components/homePage/OperationBox'
import BalanceBox from './components/homePage/BalanceBox'
import SendPage from './pages/SendPage'
import Footer from './components/homePage/Footer'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import RequestPage from './pages/RequestPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="contetnt">
      <Routes>
        <Route path='/dashboard' Component={Dashboard}></Route>
        <Route path='/send' Component={SendPage}></Route>
        <Route path='/request' Component={RequestPage}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
