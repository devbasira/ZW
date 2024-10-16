import React from 'react'
import { Navbar } from '../components/Navbar'
import { HomeContent } from '../components/HomeContent'
import { ImageContent } from '../components/ImageContent'
import { ImageSlide } from '../components/ImageSlide'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div className='w-screen h-screen'>
        <Navbar />
        <HomeContent />
        <ImageContent />
        <ImageSlide />
        <Footer />
    </div>
  )
}
