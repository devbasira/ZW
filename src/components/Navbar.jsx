import React, { useState } from 'react';
import logo_black from '../assets/logo_black.svg';
import logo_yellow from '../assets/logo_yellow.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const isReverseLayout = location.pathname === '/about';
  return (
    <div className='z-10 bg-white w-full sticky top-0 px-6 py-4 md:px-12 lg:px-28 4k:px-0 flex items-center justify-center border-b border-b--gray-600'>
      <div className='w-full max-w-[1800px] flex items-center justify-between'>
        <div onClick={() => navigate('/')} className='flex items-center gap-2 cursor-pointer'>
          <img className='w-[35px] h-[35px] mx-4' src={isHovered ? logo_yellow : logo_black} alt="" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} />
          <div className="flex flex-col">
            <h2 className="font-bold">Zaira Wasim</h2>
            <h2 className="text-[#A4A4A4] -mt-1">Creative Entrepreneur</h2>
          </div>
        </div>
        {/* <Link to={'/about'} className={`${isReverseLayout ? 'hidden' : 'flex'}`}>About</Link> */}
      </div>
    </div>
  );
};
