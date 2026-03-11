import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/insta.png'
import facebook_icon from '../Assets/fb.png'
import whatshapp_icon from '../Assets/wp.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
      <img src={footer_logo} alt="" />
      <p>ONLINE NURSERY STORE</p>
      </div>
      <ul className='footer-links'>
        <li>Stores</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
         <a href='https://www.instagram.com/'><img src={instagram_icon} alt="" /></a>
        </div>
        <div className="footer-icons-container">
          <a href='https://www.facebook.com/login/'><img src={facebook_icon} alt="" /></a>
        </div>
        <div className="footer-icons-container">
        <a href='https://web.whatsapp.com/'> <img src={whatshapp_icon} alt="" /></a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2023 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
