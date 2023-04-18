import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar className="bg-white shadow-sm mb3">
        <Nav>
            <Nav.Link  to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link  to='/register' as={NavLink}>Register</Nav.Link>
            <Nav.Link  to='/login' as={NavLink}>Login</Nav.Link>
        </Nav>
    </Navbar>
  )
}

export default NavBar