import React from 'react'
import RegisterForm from '../components/RegisterForm'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
  return (
    <div className='mt-3 mx-3' style={{width : '50%'}}>
        <span>Login</span>
        <LoginForm></LoginForm>
    </div>
  )
}

export default LoginPage