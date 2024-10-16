import React from 'react'
import basira_logo_black from '../assets/basira_logo_black.svg'
import logo_black from '../assets/logo_black.svg'
import sustenance_logo_black from '../assets/sustenance_logo_black.svg'
import '../App.css'
export const ImageSlide = () => {
  return (
    <div className='logos relative inline-block oveflow-x-hidden w-screen border-t whitespace-nowrap py-[120px]'>
      <div className="red-overlay left"></div>
      <div className='gap-20 animate-scroll'>
        <img className=' inline-block w-16 h-auto' src={logo_black} alt="Logo 1" />
        <img className=' inline-block w-56 h-auto' src={basira_logo_black} alt="Logo 2" />
        <img className=' inline-block w-56 h-auto' src={sustenance_logo_black} alt="Logo 3" />
        <img className=' inline-block w-16 h-auto' src={logo_black} alt="Logo 1" />
        <img className=' inline-block w-56 h-auto' src={basira_logo_black} alt="Logo 2" />
        <img className=' inline-block w-56 h-auto' src={sustenance_logo_black} alt="Logo 3" />
        <img className=' inline-block w-16 h-auto' src={logo_black} alt="Logo 1" />
        <img className=' inline-block w-56 h-auto' src={basira_logo_black} alt="Logo 2" />
        <img className=' inline-block w-56 h-auto' src={sustenance_logo_black} alt="Logo 3" />
        <img className=' inline-block w-16 h-auto' src={logo_black} alt="Logo 1" />
        <img className=' inline-block w-56 h-auto' src={basira_logo_black} alt="Logo 2" />
        <img className=' inline-block w-56 h-auto' src={sustenance_logo_black} alt="Logo 3" />
        <img className=' inline-block w-16 h-auto' src={logo_black} alt="Logo 1" />
        <img className=' inline-block w-56 h-auto' src={basira_logo_black} alt="Logo 2" />
        <img className=' inline-block w-56 h-auto' src={sustenance_logo_black} alt="Logo 3" />
        <img className=' inline-block w-16 h-auto' src={logo_black} alt="Logo 1" />
        <img className=' inline-block w-56 h-auto' src={basira_logo_black} alt="Logo 2" />
        <img className=' inline-block w-56 h-auto' src={sustenance_logo_black} alt="Logo 3" />
      </div>
      <div className="red-overlay right"></div>
    </div>
  )
}
