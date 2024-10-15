import React from 'react'

export const AboutContent = () => {
    return (
        <div className="flex items-center flex-col lg:grid lg:grid-cols-2 justify-between items-start bg-white w-screen px-4 md:px-16 lg:px-56 py-12 lg:py-[60px] border-t border-b">
        {/* Left Column */}
        <div className="flex flex-col col-span-1 mb-8 lg:mb-0"> {/* Adds margin on smaller screens */}
          <h3 className="text-xl text-center lg:text-left">My Journey</h3>
          <h3 className="text-[#A4A4A4] text-center lg:text-left">From the Big Screen to Big Ideas</h3>
        </div>
      
        {/* Right Column */}
        <div className="flex flex-col col-span-1 space-y-8">
         
          <div className="flex flex-col">
            <h3 className="text-lg">Bollywood</h3>
            <h3 className="text-[#A4A4A4]">
              Featured in critically acclaimed films like Dangal and The Sky is Pink, where I brought characters to life with raw authenticity.
            </h3>
          </div>
      
   
          <div className="flex flex-col">
            <h3 className="text-lg">Building sustenance.community</h3>
            <h3 className="text-[#A4A4A4]">
              Founder of 'sustenance.community,' a women-only platform that promotes modest living and meaningful sisterhood. Here, women find support, share wisdom, and grow together.
            </h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg">Entrepreneur</h3>
            <h3 className="text-[#A4A4A4]">
              I express my voice through words, helping brands and individuals convey their stories with clarity and impact.
            </h3>
          </div>
        </div>
      </div>
      
    )
}
