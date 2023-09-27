import React from 'react'

import Nav from './components/Nav'
import Hero from './components/Hero'
import ProductsCard from './components/ProductsCard'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Outlet } from 'react-router'



const App = () => {
  return (
    <section className=''>
      <Hero />
      <ProductsCard />
      <About />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
      <Outlet />
    </section>
  )
}

export default App