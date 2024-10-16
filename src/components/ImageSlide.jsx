import React from 'react'
import basira_logo_black from '../assets/basira_logo_black.svg'
import logo_black from '../assets/logo_black.svg'
import sustenance_logo_black from '../assets/sustenance_logo_black.svg'
import '../App.css'
export const ImageSlide = () => {
  return (
    <div className='logos relative inline-block w-screen  whitespace-nowrap py-[30px] lg:py-[120px] text-center'>
      <div className='w-screen flex justify-center'>
      <div className = 'border-b mb-32 w-4/5'></div>
      </div>
      <div className="red-overlay left"></div>
      <div className='mx-20  gap-20 animate-scroll'>
        <img className=' inline-block w-36 lg:w-52 h-auto' src={basira_logo_black} alt="Logo 2" />
        <img className=' inline-block w-8 lg:w-14 h-auto' src={logo_black} alt="Logo 1" />
        <img className=' inline-block w-36 lg:w-52 h-auto' src={sustenance_logo_black} alt="Logo 3" />
        <img className=' inline-block w-8 lg:w-14 h-auto' src={logo_black} alt="Logo 1" />
        <img className=' inline-block w-36 lg:w-52 h-auto' src={basira_logo_black} alt="Logo 2" />
        <img className=' inline-block w-36 lg:w-52 h-auto' src={sustenance_logo_black} alt="Logo 3" />
        <img className=' inline-block w-8 lg:w-14 h-auto' src={logo_black} alt="Logo 1" />
        <img className=' inline-block w-36 lg:w-52 h-auto' src={basira_logo_black} alt="Logo 2" />
        <img className=' inline-block w-36 lg:w-52 h-auto' src={sustenance_logo_black} alt="Logo 3" />
        <img className=' inline-block w-8 lg:w-14 h-auto' src={logo_black} alt="Logo 1" />
        <img className=' inline-block w-36 lg:w-52 h-auto' src={basira_logo_black} alt="Logo 2" />
        <img className=' inline-block w-36 lg:w-52 h-auto' src={sustenance_logo_black} alt="Logo 3" />
        <img className=' inline-block w-8 lg:w-14 h-auto' src={logo_black} alt="Logo 1" />
        <img className=' inline-block w-36 lg:w-52 h-auto' src={basira_logo_black} alt="Logo 2" />
        <img className=' inline-block w-36 lg:w-52 h-auto' src={sustenance_logo_black} alt="Logo 3" />
        <img className=' inline-block w-8 lg:w-14 h-auto' src={logo_black} alt="Logo 1" />
        <img className=' inline-block w-36 lg:w-52 h-auto' src={basira_logo_black} alt="Logo 2" />
        <img className=' inline-block w-36 lg:w-52 h-auto' src={sustenance_logo_black} alt="Logo 3" />
      </div>
      <div className="red-overlay right"></div>
      <div className='w-screen flex justify-center'>
      <div className = 'border-b mt-32 w-4/5'></div>
      </div>
    </div>
  )
}
