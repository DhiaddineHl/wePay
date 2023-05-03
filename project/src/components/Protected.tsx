import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const Protected = () => {
    const userId = localStorage.getItem('userId');
  return (
    userId? <Outlet></Outlet> : <Navigate to="/login"></Navigate>
  )
}

export default Protected