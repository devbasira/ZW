import React from 'react'
import { Link } from 'react-router-dom';

export const Footer = () => {
    const isReverseLayout = location.pathname === '/about';
    return (
        <div className='w-screen flex justify-center items-center'>
            <div className='w-full max-w-[1800px] flex flex-col md:flex-row justify-between h-[100px]  px-6 py-4 md:px-12 lg:px-28 4k:px-0 items-center'>
                <div className='flex gap-2 flex-col md:flex-row items-center'>
                    <h3 className='text-[#A4A4A4] text-lg'>powered by </h3>
                    <Link to={'https://basira.studio/'}>
                        <h3 className='text-lg hover:text-[#2226bc]'>Basira</h3>
                    </Link>
                </div>
                <div className='flex flex-col md:flex-row items-center'>
                    <h3 className='text-[#A4A4A4] text-lg'>Get in touch at</h3>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@zairawasim.com&su=Your%20Subject&body=Your%20Message"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='ml-2 text-lg hover:text-[#2226bc] hover:cursor-pointer'
                    >
                        contact@zairawasim.com
                    </a>
                </div>


                {/* <div className='flex flex-col md:flex-row items-center'>
                    <h3 className={`${isReverseLayout ? 'hidden' : 'flex'} text-lg`}>Resume</h3>
                </div> */}
            </div>
        </div>
    )
}
