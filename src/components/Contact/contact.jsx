import React, {useRef} from 'react';
import './contact.css';
import {MdMailOutline, MdOutlineMessage} from 'react-icons/md';
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kxslf1l', 'template_lw5qpaf', form.current, '8qjy-mNHLxzCZarH_')
    e.target.reset()
  };



  // service_kxslf1l
  // template_Iw5qpaf
  // pedrogussi
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option' >
            <MdMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>aaaaa@aaaa</h5>
            <a href="mailto:aaaaa@aaa" target='_blank' rel="noreferrer" >Send an Email</a>
          </article>
          <article className='contact__option' >
            <MdOutlineMessage className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+55-9999-9999</h5>
            <a href="https://api.whatsapp.com/send?phone=+55999909999" target='_blank' rel="noreferrer" >Call Me</a>
          </article>
          <article className='contact__option' >
            <MdOutlineMessage className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+55-9999-9999</h5>
            <a href="https://api.whatsapp.com/send?phone=+55999909999" target='_blank' rel="noreferrer" >Call Me</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Full name' required />
          <input type="text" name='email' placeholder='Your Email' required  />
          <textarea name="message" rows="7" placeholder='Your Message' ></textarea>
          <button type='submit' className='btn btn-primary' >Submit</button>
        </form>
      </div>
    </section>
  )
}
export default Contact
