import { useState } from 'react'

import BusinessForm from './components/forms/businessForm'
import LoginForm from './components/forms/LoginForm'
import ParticularForm from './components/forms/particularForm'
import NavBar from './components/landingPage/NavBar'
import Navbar from './components/homePage/NavBar'
import OperationBox from './components/homePage/OperationBox'


function App() {
  const [count, setCount] = useState(0)

  return (
    <OperationBox></OperationBox>
  )
}

export default App
