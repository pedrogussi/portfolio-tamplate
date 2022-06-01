import React from 'react'
import './exp.css';

import  {BsPatchCheckFill} from  'react-icons/bs'
const exp = () => {
  return (
    <section id='expirience' >
      <h5>Skills I have</h5>
      <h2>My Exp</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details' >
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small>Experiencied</small>
              </div>
            </article>

            <article className='experience__details' >
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small>Experiencied</small>
              </div>
            </article>

            <article className='experience__details' >
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Java Script</h4>
              <small>Experiencied</small>
              </div>
            </article>

            <article className='experience__details' >
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small>Experiencied</small>
              </div>
            </article>

            <article className='experience__details' >
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Tailwind</h4>
              <small>Experiencied</small>
              </div>
            </article>

            <article className='experience__details' >
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>ReactJs</h4>
              <small>Experiencied</small>
              </div>
            </article>
          </div>

        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details' >
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>NodeJs</h4>
              <small>Experiencied</small>
              </div>
            </article>

            <article className='experience__details' >
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              <small>Experiencied</small>
              </div>
            </article>

            <article className='experience__details' >
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MongoDb</h4>
              <small>Experiencied</small>
              </div>
            </article>

            <article className='experience__details' >
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small>Experiencied</small>
              </div>
            </article>

            <article className='experience__details' >
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small>Experiencied</small>
              </div>
            </article>

            <article className='experience__details' >
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Bash</h4>
              <small>Experiencied</small>
              </div>
            </article>
          </div>


        </div>
      </div>

    </section>
  )
}

export default exp