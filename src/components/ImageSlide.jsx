import React from 'react';
import { motion } from 'framer-motion';
import basira_logo_black from '../assets/basira_logo_black.svg';
import logo_black from '../assets/logo_black.svg';
import sustenance_logo_black from '../assets/sustenance_logo_black.svg';
import '../App.css';

export const ImageSlide = () => {

  return (
    <div className='logos relative overflow-x-hidden py-[30px] lg:py-[120px] text-center'>
      <div className='w-screen flex justify-center'>
        <div className='border-b max-w-[1250px] mb-32 w-4/5'></div>
      </div>
      <div className="relative mx-auto w-full max-w-[1200px] overflow-hidden">
        <div className='red-overlay left'></div>
        <motion.div
          className='flex gap-20' // Adjusted flex layout for smooth alignment
          initial={{ x: 0 }}
          animate={{ x: '-100%' }} // Slide from 0% to -100%
          transition={{
            repeat: Infinity,
            repeatType: 'loop', // Infinitely repeat the animation
            duration: 10, // Adjust animation speed here
            ease: 'linear', // Smooth, consistent motion
          }}
          style={{ whiteSpace: 'nowrap' }} // Prevent line breaks for logos
        >
          <img className='inline-block w-36 lg:w-52 h-auto' src={basira_logo_black} alt="Logo 2" />
          <img className='inline-block w-8 lg:w-14 h-auto' src={logo_black} alt="Logo 1" />
          <img className='inline-block w-36 lg:w-52 h-auto' src={sustenance_logo_black} alt="Logo 3" />
          <img className='inline-block w-36 lg:w-52 h-auto' src={basira_logo_black} alt="Logo 2" />
          <img className='inline-block w-8 lg:w-14 h-auto' src={logo_black} alt="Logo 1" />
          <img className='inline-block w-36 lg:w-52 h-auto' src={sustenance_logo_black} alt="Logo 3" />
          <img className='inline-block w-36 lg:w-52 h-auto' src={basira_logo_black} alt="Logo 2" />
          <img className='inline-block w-8 lg:w-14 h-auto' src={logo_black} alt="Logo 1" />
          <img className='inline-block w-36 lg:w-52 h-auto' src={sustenance_logo_black} alt="Logo 3" />
          <img className='inline-block w-36 lg:w-52 h-auto' src={basira_logo_black} alt="Logo 2" />
          <img className='inline-block w-8 lg:w-14 h-auto' src={logo_black} alt="Logo 1" />
          <img className='inline-block w-36 lg:w-52 h-auto' src={sustenance_logo_black} alt="Logo 3" />
          <img className='inline-block w-36 lg:w-52 h-auto' src={basira_logo_black} alt="Logo 2" />
          <img className='inline-block w-8 lg:w-14 h-auto' src={logo_black} alt="Logo 1" />
          <img className='inline-block w-36 lg:w-52 h-auto' src={sustenance_logo_black} alt="Logo 3" />
          <img className='inline-block w-36 lg:w-52 h-auto' src={basira_logo_black} alt="Logo 2" />
          <img className='inline-block w-8 lg:w-14 h-auto' src={logo_black} alt="Logo 1" />
          <img className='inline-block w-36 lg:w-52 h-auto' src={sustenance_logo_black} alt="Logo 3" />
          <img className='inline-block w-36 lg:w-52 h-auto' src={basira_logo_black} alt="Logo 2" />
          <img className='inline-block w-8 lg:w-14 h-auto' src={logo_black} alt="Logo 1" />
          <img className='inline-block w-36 lg:w-52 h-auto' src={sustenance_logo_black} alt="Logo 3" />
        </motion.div>
        <div className='red-overlay right'></div>
      </div>
      <div className='w-screen flex justify-center'>
        <div className='border-b max-w-[1250px] mt-32 w-4/5'></div>
      </div>
    </div>
  );
}
