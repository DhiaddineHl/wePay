import { useState } from 'react'

import BusinessForm from './components/forms/businessForm'
import LoginForm from './components/forms/LoginForm'
import ParticularForm from './components/forms/particularForm'
import NavBar from './components/landingPage/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <NavBar></NavBar>
  )
}

export default App
