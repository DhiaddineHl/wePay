import axios from 'axios';
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const {register, handleSubmit} = useForm();
  const navigate = useNavigate();
    
    const doLogin = (data : FieldValues) => {
        axios.post("http://localhost:8080/auth/authenticate", data)
        .then(res => {
            console.log(res);
            const token = res.data.token;
            localStorage.setItem('token', token);
            navigate('/home');
        })
      }

  return (
    <form className='mt-3 mx-5' onSubmit={handleSubmit(doLogin)} >
        <div className="mb-3">
            <input {...register("email")} type="email" className="form-control" placeholder='Email' />
        </div>
        <div className="mb-3">
            <input {...register("password")} type="password" className="form-control" placeholder='password' />
        </div>
        <button type='submit' className='btn btn-primary'>Login</button>
    </form>
  )
}


export default LoginForm