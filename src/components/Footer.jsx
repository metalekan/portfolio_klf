import React from 'react'

import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { RiExternalLinkFill } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';
import { BiLogoInstagramAlt, BiLogoFacebookCircle, } from 'react-icons/bi';



const Footer = () => {
  return (
    <footer className='w-full glass_contact text-white px-2 md:px-10'>
      <div className="flex items-center justify-between border-dashed border-b py-3">
        <h1 className='font-bold text-lg'>Lets Connect Here</h1>
        <button className="noselect btn_one bg-white text-cyan hover:bg-white">
          <span className="text font-bold">Hire Me</span>
          <a href="/" className="icon unq"><RiExternalLinkFill /></a>
        </button>
      </div>

      <div className="flex flex-wrap justify-between py-4 font-light">
        <div className="flex flex-col gap-2">
          <span className='font-semibold'>Olatinwa .J</span>
          <p className='font-light'>Let's Collaborate and Design something amazing.</p>
          <div className="flex items-center gap-3 text-[2rem]">
            <BiLogoInstagramAlt className='hover:scale-125 duration-500' />
            <BiLogoFacebookCircle className='hover:scale-125 duration-500' />
            <IoLogoWhatsapp className='hover:scale-125 duration-500' />
          </div>
        </div>
        <div className="flex flex-col">
          <span className='font-semibold'>My Contact</span>
          <div className="flex flex-col">
            <div className="flex items-center">
              <HiOutlineMail />
              <span>daredharmie@gmail.com</span>
            </div>
            <div className="flex items-center">
              <HiOutlinePhone />
              <span>+234 9044578647</span>
            </div>
            <div className="flex items-center">
              <HiOutlineLocationMarker />
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <span className='font-semibold'>Navigations</span>
          <ul className='flex flex-col'>
            <li><a href='/'>
              Home
            </a></li>
            <li><a href='/'>
              About
            </a></li>
            <li><a href='/'>
              Contact
            </a></li>
            <li><a href='/'>
              My Projects
            </a></li>
            <li><a href='/'>
              Resume
            </a></li>
          </ul>
        </div>
        <div className="flex flex-col">
          <span className='font-semibold'>Join Our Newsletter</span>
          <div className="flex items-center relative">
            <input className='input outline-0 border rounded' type="email" placeholder="Enter your email" />
            <RiExternalLinkFill className='absolute right-0 text-lg' />
          </div>
        </div>
      </div>

      <div className="flex justify-between font-light border-dashed border-t py-2">
        <div className="flex items-center flex-wrap">
          <span>User Terms & Condition</span>
          <span className='border-s ps-2' >Privacy Policy</span>
        </div>
        <span>Copyright Olatinwa .J</span>
      </div>
    </footer>
  )
}

export default Footer