import React from 'react'
import Header from './components/Header/header'
import Nav from './components/Navigation/nav'
import About from './components/About/about'
import Expirience from './components/Expirience/exp'
import Services from './components/Services/services'
import Portifolio from './components/Portfolio/portfolio'
import Testimonials from './components/Testimonials/testimonials'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'

export const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Expirience />
      <Services />
      <Portifolio />
      <Testimonials />
      <Contact /> 
      <Footer />
    </>
  )
}
export default App