import { useState } from 'react'

import BusinessForm from './components/businessForm'
import ParticularForm from './components/particularForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ParticularForm></ParticularForm>
  )
}

export default App
