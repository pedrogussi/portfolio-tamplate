import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/person-no-bg.png'
import HeaderSocial from './HeaderSocial'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>It's</h5>
        <h1>Noseless's</h1>

        <h5 className='text-light' >World</h5>

        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact"className='scroll__down' > Scroll Down </a>


      </div>
    </header>
  )
}

export default header