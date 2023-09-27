import React from 'react'
import { NavLink } from 'react-router-dom'

import Fliers from './Fliers'
import Logo from './Logo'
import BookCover from './BookCover'
import Products from './Products'
import Tabs from './Tabs'


const Portfolio = () => {
  return (
    <section className='min-h-screen w-full flex flex-col gap-10 text-white px-2 md:px-10 bg-black'>
      <h1 className='text-center text-xl font-bold'>My Portfolio</h1>
      <Tabs />
    </section>
  )
}

export default Portfolio