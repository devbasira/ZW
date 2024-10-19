import React from 'react'

export const AboutContent = () => {
    return (
        <div className="flex items-center justify-center bg-white w-screen">
        <div className='flex items-center flex-col lg:grid lg:grid-cols-2 justify-between items-center w-full max-w-[1200px] px-4 lg:px-16 md:px-16 border-t py-12'>
        <div className="flex flex-col col-span-1 mb-8 lg:mb-0"> {/* Adds margin on smaller screens */}
          <h3 className="text-xl text-center lg:text-left">My Journey</h3>
          <h3 className="text-[#A4A4A4] text-center lg:text-left">From the Big Screen to Big Ideas</h3>
        </div>
        <div className="flex flex-col col-span-1 space-y-8">
         
          <div className="flex flex-col">
            <h3 className="text-lg text-[#A4A4A4]">Bollywood</h3>
            <h3 className="text-[#A4A4A4]">
              Featured in critically acclaimed films like Dangal and The Sky is Pink, where I brought characters to life with raw authenticity.
            </h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg">Building sustenance.community</h3>
            <h3 className="text-gray-500">
              Founder of 'sustenance.community,' a women-only platform that promotes modest living and meaningful sisterhood. Here, women find support, share wisdom, and grow together.
            </h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg">Entrepreneur</h3>
            <h3 className="text-gray-500">
              I express my voice through words, helping brands and individuals convey their stories with clarity and impact.
            </h3>
          </div>
        </div>
        </div>
      </div>
      
    )
}
