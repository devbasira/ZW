import React from 'react';
import { motion } from 'framer-motion';
import basira_logo_black from '../assets/basira_logo_black.svg';
import logo_black from '../assets/logo_black.svg';
import sustenance_logo_black from '../assets/sustenance_logo_black.svg';
import '../App.css';

export const ImageSlide = () => {
  const logos = [
    { src: basira_logo_black, alt: 'Logo 2', width: '36', lgWidth: '52' },
    { src: logo_black, alt: 'Logo 1', width: '8', lgWidth: '14' },
    { src: sustenance_logo_black, alt: 'Logo 3', width: '36', lgWidth: '52' },
  ];

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
          {logos.map((logo, index) => (
            <img
              key={index}
              className={`inline-block w-${logo.width} lg:w-${logo.lgWidth} h-auto`}
              src={logo.src}
              alt={logo.alt}
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`${index}-duplicate`}
              className={`inline-block w-${logo.width} lg:w-${logo.lgWidth} h-auto`}
              src={logo.src}
              alt={logo.alt}
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`${index}-duplicate`}
              className={`inline-block w-${logo.width} lg:w-${logo.lgWidth} h-auto`}
              src={logo.src}
              alt={logo.alt}
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`${index}-duplicate`}
              className={`inline-block w-${logo.width} lg:w-${logo.lgWidth} h-auto`}
              src={logo.src}
              alt={logo.alt}
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`${index}-duplicate`}
              className={`inline-block w-${logo.width} lg:w-${logo.lgWidth} h-auto`}
              src={logo.src}
              alt={logo.alt}
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`${index}-duplicate`}
              className={`inline-block w-${logo.width} lg:w-${logo.lgWidth} h-auto`}
              src={logo.src}
              alt={logo.alt}
            />
          ))}
        </motion.div>
        <div className='red-overlay right'></div>
      </div>
      <div className='w-screen flex justify-center'>
        <div className='border-b max-w-[1250px] mt-32 w-4/5'></div>
      </div>
    </div>
  );
}
