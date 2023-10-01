import React from 'react'

import Hero from './components/Hero'
import ProductsCard from './components/ProductsCard'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Strength from './components/Strength'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Outlet } from 'react-router'



const App = () => {
  return (
    <div className='bg-black'>
      <Hero />
      <ProductsCard />
      <About />
      <Resume/>
      <Portfolio />
      <Skills/>
      <Strength/>
      <Testimonial />
      <Contact />
      <Footer />
      <Outlet />
    </div>
  )
}

export default App