import React from 'react'
import RegisterForm from '../components/RegisterForm'

const RegisterPage = () => {
  return (
    <div className='mt-3 mx-3' style={{width : "50%"}}>
        <span>Register</span>
        <RegisterForm></RegisterForm>
    </div>
  )
}

export default RegisterPage