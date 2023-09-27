import React from 'react'

import image1 from '../assets/BOOK COVERS/Pg 3&4 presentation.jpg'
import image2 from '../assets/BOOK COVERS/Three_Magazines_Mockup.png'
import image3 from '../assets/BOOK COVERS/3&4.jpg'
import image4 from '../assets/BOOK COVERS/COver.jpg'
import image5 from '../assets/BOOK COVERS/11&12.jpg'
import image6 from '../assets/BOOK COVERS/Inner-presentation-2.jpg'
import image7 from '../assets/BOOK COVERS/13&14.jpg'
import image8 from '../assets/BOOK COVERS/carousel.jpg'
import image9 from '../assets/BOOK COVERS/Pg 5&6 presentation.jpg'
import image10 from '../assets/BOOK COVERS/mockup-book.png'
import image11 from '../assets/BOOK COVERS/1&2.jpg'
import image12 from '../assets/BOOK COVERS/6613797.jpg'


const BookCover = () => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-6 gap-2'>
      <img className='object-cover object-center rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image1} alt="image1" />
      <img className='object-cover object-center rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image2} alt="image2" />
      <img className='object-cover object-center rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image3} alt="image3" />
      <img className='object-cover object-center rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image4} alt="image4" />
      <img className='object-cover object-center rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image5} alt="image5" />
      <img className='object-cover object-center rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image6} alt="image6" />
      <img className='object-cover object-center rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image7} alt="image7" />
      <img className='object-cover object-center rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image8} alt="image8" />
      <img className='object-cover object-center rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image9} alt="image9" />
      <img className='object-cover object-center rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image10} alt="image10" />
      <img className='object-cover object-center rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image11} alt="image11" />
      <img className='object-cover object-center rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={image12} alt="image12" />
    </div>
  )
}

export default BookCover