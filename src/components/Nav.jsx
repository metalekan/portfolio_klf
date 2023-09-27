import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <header className='w-full flex items-center justify-between text-white py-3 md:py-5 px-2 md:px-6 bg-black z-10'>
      <div className="logo font-extrabold text-lg">
        <span>DAMILARE</span>
      </div>
      <nav className="hidden md:block">
        <ul className='flex gap-8'>
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">
              My Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="noselect btn_three p-1 md:p-2 hover:bg-white duration-300 ease-in-out">
        <span className="text font-semibold">Download CV</span>
      </button>
    </header>
  )
}

export default Nav