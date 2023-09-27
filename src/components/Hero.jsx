import React from 'react'
import { RiExternalLinkFill } from 'react-icons/ri';

const Hero = () => {
    return (
        <main className='h-screen w-full bg-black hero_section animate__animated animate__fadeIn text-dimWhite'>
            <div className="flex flex-col justify-center md:w-full h-[100%] md:px-10 px-2 glass">
                <h1 className='text-[2rem] md:text-[4rem] font-bold'>Hello!!! I'm <span className='text_gradient'>Damilare Olatinwa Jacob </span></h1>
                <h2 className='text-xl'>A Graphic Designer and Brand Manager</h2>
                <p className='w-full md:w-[50%]'>Damilare Olatinwa ensures brand consistency and innovative solutions, keeping an eye on trends to provide design.</p>
                <div className="flex gap-7 md:gap-14 mt-12">

                    <button className="button">

                        <a href="/" className="flex items-center">Portfolio<RiExternalLinkFill /></a>
                    </button>

                    <button className="button">
                        <a href='/' className="font-semibold">Hire me</a>
                    </button>
                </div>

            </div>
        </main>
    )
}

export default Hero