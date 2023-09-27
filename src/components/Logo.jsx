import React from 'react'

import image1 from '../assets/LOGO STUFFS/aquam logo.png'
import image2 from '../assets/LOGO STUFFS/ho meals.jpg'
import image3 from '../assets/LOGO STUFFS/Realm Carousel2.jpg'
import image4 from '../assets/LOGO STUFFS/Ho meals logo.jpg'
import image5 from '../assets/LOGO STUFFS/dlic 1.jpg'
import image6 from '../assets/LOGO STUFFS/carousel.jpg'
import image7 from '../assets/LOGO STUFFS/e STUDIOS 1.jpg'
import image8 from '../assets/LOGO STUFFS/Kiva Carousel3.jpg'
import image9 from '../assets/LOGO STUFFS/meemee carousel.jpg'
import image10 from '../assets/LOGO STUFFS/aquam 4.jpg'
import image11 from '../assets/LOGO STUFFS/Realm Carousel3.jpg'
import image12 from '../assets/LOGO STUFFS/HO-1.jpg'

const Logo = () => {
    return (
        <div className='grid grid-cols-4 md:grid-cols-6 gap-2'>
            <img className='object-cover rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image1} alt="image1" />
            <img className='object-cover rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image2} alt="image2" />
            <img className='object-cover rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image3} alt="image3" />
            <img className='object-cover rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image4} alt="image4" />
            <img className='object-cover rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image5} alt="image5" />
            <img className='object-cover rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image6} alt="image6" />
            <img className='object-cover rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image7} alt="image7" />
            <img className='object-cover rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image8} alt="image8" />
            <img className='object-cover rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image9} alt="image9" />
            <img className='object-cover rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image10} alt="image10" />
            <img className='object-cover rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image11} alt="image11" />
            <img className='object-cover rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image12} alt="image12" />
        </div>

    )
}

export default Logo