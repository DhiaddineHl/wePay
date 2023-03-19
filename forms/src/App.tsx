import { useState } from 'react'

import BusinessForm from './components/businessForm'
import LoginForm from './components/LoginForm'
import ParticularForm from './components/particularForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BusinessForm></BusinessForm>
  )
}

export default App
