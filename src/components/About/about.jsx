import React from 'react'

import './about.css'
import MeBg from '../../assets/person-bg.jpg';

import {FaAward, FaUser, FaFolder} from 'react-icons/fa'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MeBg} alt="Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card' >

              <FaAward className='about__icon' />
              <h5>Expirience</h5>
              <small>Years programming</small>
            </article> 

            <article className='about__card' >
              <FaUser className='about__icon' />
              <h5>Clientes</h5>
              <small>wordwild</small>
            </article>

            <article className='about__card' >
              <FaFolder className='about__icon' />
              <h5>Projects</h5>
              <small>completed</small>
            </article>


          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quisquam doloribus quo quas cupiditate quis architecto fugiat ab natus asperiores consequatur aspernatur quos cum, laboriosam corrupti ratione hic. Vel, sed.
          </p>

          <a href="#contact" className='btn btn-primary' >Let's talk</a>
        </div>
      </div>
      
    </section>
  )
}

export default about