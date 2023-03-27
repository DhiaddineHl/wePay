import React from 'react'
import './navbarStyle.css'
import { BsGear } from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className="navBar">
        <div className="brand">
            <b>We</b>Pay
        </div>
        <ul className="links">
            <li>Dashboard</li>
            <li>Send</li>
            <li>Request</li>
        </ul>
        <button className="logout">
            <BsGear className='icon'/>
            Logout
        </button>
    </nav>
  )
}

export default Navbar