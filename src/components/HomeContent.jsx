import React, {useState} from 'react'
import { motion } from 'framer-motion';
import photo from '../assets/home_image.jpg'
import photo_about from '../assets/about_image.jpg'
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
          <div className='flex flex-col space-y-6'>
            <h3 className='mt-4 text-[20px] md:text-[24px] sm:text-[20px] font-light leading-relaxed'>
              For years, I expressed myself through storytelling in Bollywood. I connected deeply with the characters I portrayed, but over time, I felt a shift within me. Despite how well I fit into that world, I realized it wasn’t where I truly belonged.
            </h3>
            <h3 className='text-[20px] md:text-[24px] sm:text-[20px] font-light leading-relaxed'>
              In 2019, I stepped away, feeling the path no longer resonated with my true self. What I thought was success had distanced me from my inner peace. As I stepped back, I began a journey of rediscovering my purpose, one filled with reflection, growth, and a search for contentment.
            </h3>
            <h3 className={`${!isReverseLayout ? 'hidden' : 'flex'} text-[20px] md:text-[24px] sm:text-[20px] font-light leading-relaxed`}>
              Through this ongoing journey, I’ve gained a new sense of purpose. Gradually, I became drawn to ideas that aligned with my evolving values. Now, I’m building Sustenance—a place for women to come together, find support, and share meaningful conversations rooted in faith and growth. It’s the kind of community I wish I had when navigating my own path.
            </h3>
          </div>
          <Link to={'/about'}>
            <h3 className={`mt-8 ${isReverseLayout ? 'hidden' : 'flex'} text-[20px] md:text-[22px] font-light`}>
              Read more...
            </h3>
          </Link>
          <div className={`flex ${isReverseLayout ? 'mb-16' : ''} justify-end mt-8`}>
            {isReverseLayout ? (
              <img
              className="pic-img rounded-full object-contain border lg:w-[559px] lg:h-[559px] md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] w-[250px] h-[250px]"
              src={logo} 
              alt="Logo"
            />
            ) : ( <img
              className="pic-img rounded-full object-cover lg:w-[559px] lg:h-[559px] md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] w-[250px] h-[250px]"
              src={isHovered ? photo : photo_about} 
              alt="About me"
              onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)} 
            />)}          
          </div>
        </div>
      </motion.h1>
    </div>
  )
}
