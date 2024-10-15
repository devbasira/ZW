import React from 'react'
import { motion } from 'framer-motion';
import photo from '../assets/photo.avif'
import '../App.css'
import { useLocation } from 'react-router-dom';
export const HomeContent = () => {
  const isReverseLayout = location.pathname === '/about';
  console.log(isReverseLayout)
  return (
    <div className={`flex ${isReverseLayout ? 'flex-col-reverse' : 'flex-col'} bg-white w-screen px-4 md:px-16 lg:px-56 py-12 lg:py-[60px]`}>
    <motion.h1
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 1.0, ease: "easeOut" }} 
    >
      <div className={`flex ${isReverseLayout ? 'flex-col-reverse' : 'flex-col'} `}>
      <h3 className='mt-4 text-[24px] md:text-[30px] sm:text-[20px] font-light'>
      Now, as a creative entrepreneur, I help others find their voice. I also lead 'sustenance.community,' a space dedicated to supporting and empowering women who want to live a modest, meaningful life
      </h3>
      <h3 className='text-[24px] md:text-[30px] sm:text-[20px] font-light'>
        My journey started in Bollywood, where I portrayed characters on screen that touched many hearts. But in 2019, I chose a different path, a path that aligned with my deeper values, personal growth, and faith. I stepped away from the spotlight to live a life true to myself.
      </h3>

  
      <h3 className={`mt-8 ${isReverseLayout ? 'hidden' : 'flex'} text-[20px] md:text-[24px] font-light`}>
        About me
      </h3>
  
      <div className={`flex ${isReverseLayout ? 'mb-16' : ''} justify-center md:justify-end mt-8`}>
        <img
          className='pic-img rounded-full  lg:w-[559px] lg:h-[559px] md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] object-cover'
          src={photo}
          alt="About me"
        />
      </div>
      </div>
    </motion.h1>
  </div>
  )
}

