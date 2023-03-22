import React from 'react'

import './navBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="brand">
            <span>
                <b>We</b>Pay
            </span>
        </div>
        <div className="navbar-list">
            <ul className="list">
                <li><a href="">Business</a></li>
                <li><a href="">Particular</a></li>
                <li><a href="">Developer</a></li>
            </ul>
        </div>
        <button className='login'>Login</button>
    </nav>
  )
}

export default NavBar