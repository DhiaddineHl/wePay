import { useState } from 'react'
import reactLogo from './assets/react.svg'
import RegisterForm from './components/RegisterForm'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'


function App() {
 

  return (
    <div className="contetnt">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' Component={LandingPage}></Route>
        <Route path='/register' Component={RegisterPage}></Route>
        <Route path='/login' Component={LoginPage}></Route>
        <Route path='/home' Component={HomePage}></Route>
      </Routes>
    </div>
  )
}

export default App
