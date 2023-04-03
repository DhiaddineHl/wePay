import React from 'react'
import './navbarStyle.css'
import { BsGear } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'



const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navBar">
        <div className="brand">
            <b>We</b>Pay
        </div>
        <ul className="links">
            <li><Link to='/dashboard' className='navbarlink'>Dashboard</Link></li>
            <li><Link to='/send' className='navbarlink' >Send</Link></li>
            <li><Link to='/request' className='navbarlink' >Request</Link></li>
        </ul>
        <button className="logout" onClick={() => navigate('/')}>
            <BsGear className='icon'/>
            Logout
        </button>
    </nav>
  )
}

export default Navbar