import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Frontend_Assets/logo_big.png'
import instagram_icon from '../Assets/Frontend_Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/Frontend_Assets/whatsapp_icon.png'
import pinterest_icon from '../Assets/Frontend_Assets/pintester_icon.png'
// import facebook_icon from '../Assets/Frontend_Assets/facebook-icon.png'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>PickUp</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
            {/* <div className="footer-icons-container">
                <img src={facebook_icon} alt="" />
            </div> */}
        </div>
        <div className="footer-copyright">
            <hr />
            <p>All rights are reserved &copy; {year} by PickUp Pvt.Ltd </p>
        </div>
    </div>
  )
}

export default Footer