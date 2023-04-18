import React, { useEffect } from 'react'
import { FieldValue, FieldValues, useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const RegisterForm = () => {

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    
    const doSubmit = (data : FieldValues) => {
        axios.post("http://localhost:8080/auth/register", data)
        .then(res => {
            console.log(res);
            const token = res.data.token;
            localStorage.setItem('token', token);
            navigate('/home');
        })

    }
    
  return (
    <form className='mt-3 mx-5' onSubmit={handleSubmit(doSubmit)}>
        <div className="mb-3">
            <input {...register("firstname")} type="text" className="form-control" placeholder='FirstName' />
        </div>
        <div className="mb-3">
            <input {...register("lastname")} type="text" className="form-control" placeholder='LastName' />
        </div>
        <div className="mb-3">
            <input {...register("email")} type="email" className="form-control" placeholder='Email' />
        </div>
        <div className="mb-3">
            <input {...register("password")} type="password" className="form-control" placeholder='Password' />
        </div>
        <div className="mb-3">
            <input {...register("phoneNumber")} type="text" className="form-control" placeholder='PhoneNumber' />
        </div>
        <button type='submit' className='btn btn-primary'>Register now</button>
    </form>
  )
}

export default RegisterForm