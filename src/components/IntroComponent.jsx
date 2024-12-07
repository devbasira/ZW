import React from 'react';
import { motion } from 'framer-motion';
import hamza from '../assets/Hamza.svg'

function IntroComponent() {
    return (
        <motion.div
            className="w-screen flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.0, ease: 'easeOut', delay: 0.5 }}
        >
            <div className="lg:w-[1200px] w-full flex flex-col items-center lg:items-start justify-between pt-[80px] lg:pt-[235px] gap-[100px] pr-[50px] pl-[25px] lg:pl-0 lg:pr-0">
                <h1 className='text-[26px] font-[600] text-[#FBB00A]'>
                    !السلام عليكم
                </h1>
                {/* <img className='h-[50px] w-auto' src={salam} alt="Salam" /> */}
                <div className="w-full lg:w-[922px] gap-[20px] flex flex-col">
                    <p className="text-[28px] lg:text-[44px]">
                        Hi, I’m Zaira Wasim.
                    </p>
                    <p className="text-[28px] lg:text-[44px]">
                        If my name sounds familiar, it’s probably because you know me from my time in Bollywood.
                    </p>
                </div>
            </div>
            <div className="lg:w-[1200px] w-full flex flex-col items-center lg:items-end justify-between pt-[80px] lg:pt-[235px] pr-[50px] pl-[25px] lg:pl-0 lg:pr-0">
                <div className="w-full lg:w-[668px] flex flex-col gap-[48px]">
                    <h2 className="text-gray-400 text-[16px] font-[700] lg:text-[24px]">
                        \ MY PAST
                    </h2>
                    <p className="text-[18px] lg:text-[24px] mt-[20px]">
                        I was part of the industry for years, but while being there, I felt a void—an unexplainable longing for something I couldn’t name or make sense of. Though I seemed to fit perfectly into that world, I knew deep down I didn’t truly belong there.
                    </p>
                    <h2 className="text-gray-400 font-[700] text-[16px] lg:text-[24px]">
                        \/ THE TRANSITION
                    </h2>
                    <div className="gap-[20px] flex flex-col mt-[10px]">
                        <div className='flex itema-center'>
                        <img className = 'h-[48px] w-auto ' src={hamza} alt="" />
                        <h2 className="text-[18px] ml-4 lg:text-[24px] ">
                            What we don’t confront remains unchanged.
                        </h2>
                        </div>
                        
                        <p className="text-[18px] lg:text-[24px]">
                            So, I decided to confront this feeling and began a journey of self-discovery. I asked myself questions—some uncomfortable and difficult ones. The result of the journey was realizing that the life I was living wasn’t aligned with my innate nature or the purpose I was seeking.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default IntroComponent;
