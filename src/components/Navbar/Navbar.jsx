import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Frontend_Assets/logo.png'
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [menu, setMenu] = useState("home")

  return (
    <div className="navbar">
        <div className="nav-logo">
            <Link to='/'>
            <img src={logo} alt="" />
            </Link>
            <p>
                <Link to='/'>
                PickUp
                </Link>
            </p>
        </div>  
            <ul className='nav-menu'>
        <li onClick={() => {setMenu("home")}}>
            <Link to='/' style={{ textDecoration: 'none'}}>Home</Link> {menu === "home"? <hr/> : <></>} </li>
        <li onClick={() => {setMenu("mens")}}>
            <Link to='/mens' style={{ textDecoration: 'none'}}>Men</Link> {menu === "mens"? <hr/>:<></>}</li>
        <li onClick={() => {setMenu("womens")}}>
            <Link to='/womens' style={{ textDecoration: 'none'}}>Women</Link> {menu === "womens"? <hr/>:<></>} </li>
        <li onClick={() => {setMenu("kids")}}>
            <Link to='/kids' style={{ textDecoration: 'none'}}>Kids</Link> {menu === "kids"?<hr/>:<></>} </li>
            </ul>

            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
  )
}
