import React from 'react'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

import dami from '../assets/kalifaAbout.jpg';
import { imagesList } from '../../data';

import image1 from '../assets/msg5506457297-396.png'
import image2 from '../assets/msg5506457297-400.png'
import image3 from '../assets/msg5506457297-404.png'
import image4 from '../assets/msg5506457297-410 1.png'



// console.log(imagesList);
const About = () => {
  return (
    <section className='min-h-screen w-full flex flex-col gap-8 md:gap-0 px-2 md:px-10 bg-black text-white'>
      <h2 className='text-center text-xl font-bold'>About</h2>
      <div className="flex flex-col justify-around md:h-[80vh]">
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row justify-between ">
          <img className="w-[100px] md:w-[100%]" className='w-[70%] self-center md:w-[30%] rounded-md' src={dami} alt="dami" />
          <div className="flex flex-col justify-between md:w-[30%]">
            <p className='font-light text-center md:text-start'>Damilare Olatinwa .J is a skilled Graphic Designer and adept Brand Manager, merging creativity with strategic expertise. With a solid foundation in design principles and a flair for capturing brand essence, Olatinwa excels in delivering cohesive brand experience. From logos, fliers, to branding colateral. Damilare Olatinwa ensures brands consistency and innovative solutions, keeping an eye on industry trends to provide cutting-edge design. <br /> Collaborate with Damilare Olatinwa elevate your brand to new heights.</p>
            <div className="flex flex-col self-end md:self-start text-sm md:text-md font-thin mt-10">
              <div className="flex items-center gap-1">
                <HiOutlineMail />
                <span>daredharmie@gmail.com</span>
              </div>
              <div className="flex items-center gap-1">
                <HiOutlinePhone />
                <span>+2349044578647</span>
              </div>
              <div className="flex items-center gap-1">
                <HiOutlineLocationMarker />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8 gap-10 mx-5 md:mx-0 md:gap-10 md:px-10 overflow-scroll md:overflow-auto">
          <img className="w-[100px] md:w-[100%]" src={image1} alt="image1" />
          <img className="w-[100px] md:w-[100%]" src={image2} alt="image2" />
          <img className="w-[100px] md:w-[100%]" src={image4} alt="image3" />
          <img className="w-[100px] md:w-[100%]" src={image3} alt="image4" />
        </div>
      </div>
    </section>
  )
}

export default About