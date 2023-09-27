import React from 'react'
import { RiExternalLinkFill } from 'react-icons/ri';

const Hero = () => {
    return (
        <main className='h-screen w-full text-white bg-black hero_section animate__animated animate__fadeIn'>
                <div className="flex flex-col justify-center md:w-full h-[100%] md:px-10 px-2 glass">
                    <h1 className='text-[2rem]'>Hello!!! <br /> I'm Damilare Olatinwa Jacob by name</h1>
                    <h2 className='text-lg text-cyan'>A Graphic Designer and Brand Manager</h2>
                    <p className='w-full md:w-[50%]'>Damilare Olatinwa ensures brand consistency and innovative solutions, keeping an eye on trends to provide design.</p>
                    <div className="flex gap-8 mt-6">

                        <button className="noselect btn_one bg-cyan">
                            <span className="text font-semibold">Portfolio</span>
                            <a href="/" class="icon"><RiExternalLinkFill /></a>
                        </button>

                        <button className="noselect btn_two hover:bg-cyan duration-300">
                            <span className="text font-semibold">Hire me</span>
                        </button>
                    </div>

                </div>
        </main>
    )
}

export default Hero