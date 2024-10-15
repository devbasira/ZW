import React from 'react'

export const Footer = () => {
    return (
        <div className='w-screen flex justify-around border-t border-t--[#A4A4A4] py-10 items-center'>
            <div className='flex gap-2'>
                <h3 className='text-[#A4A4A4] text-lg'>powered by </h3>
                <h3 className='text-lg'>Basira</h3>
            </div>
            <div>
                <h3 className='text-[#A4A4A4] text-lg'>Get in touch at</h3>
                <h3 className='text-lg'>contact@zairawasim.com</h3>
            </div>
            <div>
                <h3 className='text-lg'>Resume</h3>
            </div>
        </div>
    )
}
