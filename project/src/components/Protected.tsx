import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const Protected = () => {
    const token = localStorage.getItem('token');
  return (
    token? <Outlet></Outlet> : <Navigate to="/login"></Navigate>
  )
}

export default Protected