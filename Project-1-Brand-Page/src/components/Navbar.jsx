import React from 'react'
import logo from '../../public/brand_logo.svg'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="logo" />
        <ul>
            <li><a href="#">MENU</a></li>
            <li><a href="#">LOCATION</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT</a></li>
        </ul>
        <button id='loginBtn'>Login</button>
    </nav>
  )
}

export default Navbar
