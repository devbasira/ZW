import React from 'react'
import { Navbar } from '../components/Navbar'
import { HomeContent } from '../components/HomeContent'
import { ImageSlide } from '../components/ImageSlide'
import { Footer } from '../components/Footer'
import { AboutContent } from '../components/AboutContent'
export const About = () => {
  return (
    <div className='w-screen h-screen bg-black'>
    <Navbar />
    <HomeContent />
    <AboutContent />
    <ImageSlide />
    <Footer />
</div>
  )
}
