import {React, useState} from 'react'
import './nav.css'

import {AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineContacts} from 'react-icons/ai';
import {RiServiceLine} from 'react-icons/ri'


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#') } className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser/></a>
      <a href="#expirience" onClick={() => setActiveNav('#expirience')} className={activeNav === '#expirience' ? 'active' : ''} ><AiOutlineBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} ><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav