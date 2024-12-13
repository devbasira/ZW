import React from 'react'
import hamza from '../assets/Hamza.svg'
const QuranAya = ({ ayat, index }) => {
    return (
      <div className='flex items-start pr-[60px] mr-[10px]'>
         <img className='h-[35px] my-[20px] w-auto' src={hamza} alt="" />
        <blockquote className="pl-[15px] mt-4">
          <h3 className=' text-gray-500'>
          {ayat}
          </h3>
          <h3 className='text-right  text-gray-500 text-[16px] mb-4'>
          {index && `— ${index}`}
          </h3>
        </blockquote>
      </div>
    );
  };
  

export default QuranAya