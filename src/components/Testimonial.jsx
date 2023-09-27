import React from 'react'

import { GiRoundStar } from 'react-icons/gi';
import { myTestimonials } from '../../data'

import avatar from '../assets/Avatar.jpg';

const Testimonial = () => {
  // console.log(myTestimonials);
  return (
    <section className='min-h-screen w-full flex flex-col bg-black text-white px-2 md:px-10'>
      <h1 className='text-center text-xl font-bold'>Testimonials</h1>
      <h2 className='text-center text-lg'>Few of my clients has one or two to say about me</h2>
      <div className="grid md:grid-cols-3 gap-5 mt-[2rem]">
        {
          myTestimonials.map((review, index) => (
            <div key={index} className="flex flex-col justify-between p-2 rounded-lg h-[269px] glass_testimony">
              <div className="flex gap-4 pt-4">
                <img className='rounded-full object-contain' src={avatar} alt="" />
                <div className="flex flex-col">
                  <div className="flex text-[gold] gap-1">
                    <GiRoundStar />
                    <GiRoundStar />
                    <GiRoundStar />
                  </div>
                  <span className='text-md font-semibold'>{review.name}</span>
                </div>
              </div>
              <p className='font-light'>{review.testimony}</p>
            </div>

          ))
        }
      </div>
    </section>
  )
}

export default Testimonial