import React from 'react'
import './footerStyle.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <ul className="list">
            <li>Accessibility</li>
            <li>Privacy</li>
            <li>Legal</li>
        </ul>
        <div className="rights">
            <span className="brand">
                <b>We</b>Pay
            </span>
            <p className="rightsReserved">
                &copy; 2023 All rights reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer