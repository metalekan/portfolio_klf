import React from 'react'

import image1 from '../assets/FLIERS/VOB-Flier-For-Social-Meida.jpg'
import image2 from '../assets/FLIERS/food vendors.jpg'
import image3 from '../assets/FLIERS/Shegs.jpg'
import image4 from '../assets/FLIERS/Eldera-FOr-Him.jpg'
import image5 from '../assets/FLIERS/Timleo Gadgets.jpg'
import image6 from '../assets/FLIERS/Jan Edition 3.jpg'
import image7 from '../assets/FLIERS/Mothersday.jpg'
import image8 from '../assets/FLIERS/Christmas-1.jpg'
import image9 from '../assets/FLIERS/Godman.jpg'
import image10 from '../assets/FLIERS/Easter-Faith-Conference.jpg'
import image11 from '../assets/FLIERS/Afro-Beats-Party.jpg'
import image12 from '../assets/FLIERS/Eldera FOr Her.jpg'


const Fliers = () => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-6 gap-3'>
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

export default Fliers