import { useState } from 'react'

import BusinessForm from './components/forms/businessForm'
import LoginForm from './components/forms/LoginForm'
import ParticularForm from './components/forms/particularForm'
import Navbar from './components/homePage/NavBar'
import OperationBox from './components/homePage/OperationBox'
import BalanceBox from './components/homePage/BalanceBox'
import SendPage from './pages/SendPage'
import Footer from './components/homePage/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <OperationBox heading='Request'></OperationBox>
  )
}

export default App
