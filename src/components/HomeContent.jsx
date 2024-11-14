import React, {useState} from 'react'
import { motion } from 'framer-motion';
import photo_black from '../assets/photo_black.jpg'
import logo from '../assets/ZW_logo.png'
import { Link, useLocation } from 'react-router-dom';

export const HomeContent = () => {
  const location = useLocation();
  const isReverseLayout = location.pathname === '/about';
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`flex ${isReverseLayout ? 'flex-col-reverse' : 'flex-col'} bg-white w-full max-w-[1200px] mx-auto px-4 md:px-16  py-12 lg:py-[60px] 4k:px-0`}>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        <div className={`flex ${isReverseLayout ? 'flex-col-reverse' : 'flex-col'}`}>
          <div className='flex flex-col space-y-6 lg:mr-64 lg:px-0 md:px-0 sm:px-0 px-10' >
            <div>
            <h3 className='mt-4 mb-3 text-[20px] md:text-[24px] sm:text-[20px]  leading-relaxed'>
              For years, I expressed myself through storytelling in Bollywood.
            </h3>
            <h3 className=' text-[20px] md:text-[24px] -mt-4 sm:text-[20px]  leading-relaxed'>
            I connected deeply with the characters I portrayed, but over time, I felt a shift within me. Despite how well I fit into that world, I realized it wasn’t where I truly belonged.
            </h3>
            </div>
            <h3 className=' text-[20px] md:text-[24px] sm:text-[20px]  leading-relaxed'>
              In 2019, I stepped away, feeling the path no longer resonated with my true self. What I thought was success had distanced me from my inner peace. As I stepped back, I began a journey of rediscovering my purpose, one filled with reflection, growth, and a search for contentment.
            </h3>
            <h3 className={`${!isReverseLayout ? 'hidden' : 'flex'} text-[20px] md:text-[24px] sm:text-[20px]  leading-relaxed`}>
              Through this ongoing journey, I’ve gained a new sense of purpose. Gradually, I became drawn to ideas that aligned with my evolving values. Now, I’m building Sustenance—a place for women to come together, find support, and share meaningful conversations rooted in faith and growth. It’s the kind of community I wish I had when navigating my own path.
            </h3>
            <Link to={'/about'}>
            <h3 className={` ${isReverseLayout ? 'hidden' : 'flex'} text-[#A4A4A4] text-[20px] md:text-[22px] hover:text-[#2226bc]`}>
              Read more...
            </h3>
          </Link>
          </div>
          <div className={`flex ${isReverseLayout ? 'mb-16' : ''} justify-end mt-8`}>
            {isReverseLayout ? (
              <img
              className="pic-img rounded-full object-fit border lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] sm:w-[200px] sm:h-[200px] w-[70vw] h-auto"
              src={logo} 
              alt="Logo"
            />
            ) : ( <img
              className="pic-img rounded-full object-cover lg:w-[559px] lg:h-[559px] md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] w-[70vw] h-auto"
              src={photo_black} 
              alt="About me"
              // onMouseEnter={() => setIsHovered(true)} 
              // onMouseLeave={() => setIsHovered(false)} 
            />)}          
          </div>
        </div>
      </motion.h1>
    </div>
  )
}
