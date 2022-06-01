import React from 'react'
import  './footer.css'
import {FiFacebook,FiInstagram, FiTwitter }from 'react-icons/fi' 

const footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo' >Noseless</a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#expirience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>



        </ul>

        <div className="footer__socials">
          <a href="https://facebook.com"><FiFacebook/></a>
          <a href="https://instagrm.com"><FiInstagram/></a>
          <a href="https://twitter.com"><FiTwitter/></a>
        </div>
        <div className="footer__copyright">
          <small>&copy;Noseless</small>
        </div>
    </footer>
  )
}

export default footer