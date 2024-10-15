import React from 'react'
import basira_logo_black from '../assets/basira_logo_black.svg'
import logo_black from '../assets/logo_black.svg'
import sustenance_logo_black from '../assets/sustenance_logo_black.svg'
import '../App.css'
export const ImageSlide = () => {
  return (
    <div className='inline-block w-screen px-[80px] py-[40px] whitespace-nowrap border-t border-t--[#A4A4A4]'>
      <div className=' gap-20 animate-scroll inline-block'>
        <img className=' inline-block w-16 h-auto' src={logo_black} alt="Logo 1" />
        <img className=' inline-block w-56 h-auto' src={basira_logo_black} alt="Logo 2" />
        <img className=' inline-block w-56 h-auto' src={sustenance_logo_black} alt="Logo 3" />
        <img className=' inline-block w-16 h-auto' src={logo_black} alt="Logo 1" />
        <img className=' inline-block w-56 h-auto' src={basira_logo_black} alt="Logo 2" />
        <img className=' inline-block w-56 h-auto' src={sustenance_logo_black} alt="Logo 3" />
      </div>
      <div className=' gap-20 animate-scroll inline-block'>
        <img className=' inline-block w-16 h-auto' src={logo_black} alt="Logo 1" />
        <img className=' inline-block w-56 h-auto' src={basira_logo_black} alt="Logo 2" />
        <img className=' inline-block w-56 h-auto' src={sustenance_logo_black} alt="Logo 3" />
        <img className=' inline-block w-16 h-auto' src={logo_black} alt="Logo 1" />
        <img className=' inline-block w-56 h-auto' src={basira_logo_black} alt="Logo 2" />
        <img className=' inline-block w-56 h-auto' src={sustenance_logo_black} alt="Logo 3" />
      </div>
    </div>
  )
}
