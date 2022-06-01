import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/dribble1.png'
import data from './data'
const portfolio = () => {
  return (
    <section id='portifolio' >
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id, title, image, github,demo}) => {
          return (
          <article key={id} className='portfolio__item' >
            <div className="portfolio__item-image">
              <img src={IMG1} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' >GitHub</a>
            <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer" >LiveDemo</a>
            </div>
          </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default portfolio