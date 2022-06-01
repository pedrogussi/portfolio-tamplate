import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/person1.jpg'
import AVT2 from '../../assets/person2.jpg'
import AVT3 from '../../assets/person3.jpg'

// import Swiper core and required modules
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
const data = [
  {
    avatar : AVT1,
    name: 'Nome1',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore doloribus nesciunt labore aspernatur! Reprehenderit sed molestias perspiciatis quam repellendus.'
  },
  {
    avatar : AVT2,
    name: 'Nome2',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore doloribus nesciunt labore aspernatur! Reprehenderit sed molestias perspiciatis quam repellendus.'
  },
  {
    avatar : AVT3,
    name: 'Nome3',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore doloribus nesciunt labore aspernatur! Reprehenderit sed molestias perspiciatis quam repellendus.'
  }
]
const testimonials = () => {
  return (
    <section id='testimonials' >
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2> 

      < Swiper
      className="container testimonials__container"
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      >
        {
          data.map(({avatar,name,review}, index) => {
            return (
            <SwiperSlide key={index} className='testimonial' >
              <div className="client__avatar">
              <img src={avatar} alt="" />
              </div>
              <h5>{name}</h5>
              <small className='client__review' >
                {review}
              </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper >     

    </section>
  )
}

export default testimonials