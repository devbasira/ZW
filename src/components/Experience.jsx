import React from 'react';
import { motion } from 'framer-motion';
import logo_yellow from '../assets/logo_yellow.svg';

function Experience() {
    return (
        <motion.div
            className="w-screen flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.0, ease: 'easeOut', delay: 0.5 }}
        >
            <div className="lg:w-[1200px] w-full flex flex-col items-center lg:items-start justify-between pt-[80px] lg:pt-[235px] pb-[80px] lg:pb-[235px] pl-[25px] pr-[50px] lg:pl-0 lg:pr-0">
                <div className="w-full lg:w-[672px] relative h-[200px] lg:h-[400px] lg:h-[600px] flex flex-col items-start">
                    <img
                        src={logo_yellow}
                        className="absolute left-[14px] bottom-[30px] lg:bottom-[63px] w-[100px] lg:w-[300px] h-[128px] lg:h-[384px]"
                        alt="Logo"
                    />
                </div>
                <div className="w-full lg:w-[672px] flex flex-col gap-[30px] lg:gap-[48px]">
                    <h2 className="text-[#0A3C93] text-[16px] lg:text-[22px]">
                        \ MY JOURNEY
                    </h2>
                    <div className="gap-[20px] lg:gap-[30px] flex flex-col mt-[10px]">
                        <p className="text-[18px] lg:text-[24px]">
                            The answers I found were calls to action. They needed to be reflected in the way I lived. And so, in 2019, I made the decision to dissociate myself from the world of cinema and
                            <a
                                href="https://www.instagram.com/zairawasim_/p/BzUBXYrlsml/?img_index=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0A3C93] ml-1 underline cursor-pointer">
                                announced it publicly.
                            </a>
                        </p>
                        <p className="text-[18px] lg:text-[24px]">
                            It’s been almost five years since then—the same length of time I spent in the industry.
                        </p>
                        <p className="text-[18px] lg:text-[24px]">
                            Over these years, I’ve tried to embrace a life of meaning, purpose, and intention, even when it didn’t make sense to many.
                        </p>
                        <div className='flex items-center'>
                        <p className="text-[18px] lg:text-[24px]">
                            What I’ve learned hasn’t just transformed my inner world—it’s shaped how I show up, how I connect with others, and what I wish to bring to the world.
                        </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Experience;
