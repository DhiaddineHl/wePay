import React from 'react'
import './navbarStyle.css'
import { BsGear } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



const Navbar = () => {
  const navigate = useNavigate();

  
  const handleLogout = () =>{
    localStorage.clear();
    navigate("/")
    // const token = localStorage.getItem('token');
    // console.log(token)
    // axios.post("http://localhost:8080/auth/logout")
    // .then( res =>{
    //         const token = res.data.token;
    //         localStorage.setItem('token', token);
    //         navigate('/')
    }
 





  return (
    <nav className="navBar">
        <div className="brand" onClick={() => navigate('/')}>
            <b>We</b>Pay
        </div>
        <ul className="links">
            <li><Link to='/dashboard' className='navbarlink'>Dashboard</Link></li>
            <li><Link to='/send' className='navbarlink' >Send</Link></li>
            <li><Link to='/request' className='navbarlink' >Request</Link></li>
        </ul>
        <button className="logout" onClick={handleLogout}>
            <BsGear className='icon'/>
            Logout
        </button>
    </nav>
  )
}

export default Navbar