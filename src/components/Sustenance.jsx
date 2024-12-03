import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/sustanence_logo.svg';
import Nuqta from '../assets/Nuqta.svg'

export default function Sustenance() {
    return (
        <motion.div
            className="w-screen flex flex-col items-center">
            <motion.div className="w-full bg-[#0A3C93] py-16 lg:py-[235px] pl-[25px] pr-[50px] lg:pl-0 lg:pr-0">
                <div className="max-w-[1200px] mx-auto flex flex-col items-start lg:items-center justify-center gap-8 lg:gap-[48px]">
                    <motion.div className="w-full items-center flex gap-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 1.0, ease: 'easeOut', delay: 0.3 }}
                    >
                        <img src={Nuqta} className='h-[36px] w-auto' alt="" />
                        <h2 className="text-white text-[16px] font-[700] lg:text-[24px]">
                            SUSTENANCE.COMMUNITY
                        </h2>
                    </motion.div>
                    <motion.div className="w-full  flex flex-col items-start justify-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 1.0, ease: 'easeOut', delay: 0.3 }}>
                        <p className="text-[36px] lg:text-[44px] text-white lg:w-[672px] lg:text-left">
                            This journey now extended into my effort to build Sustenance Community.
                        </p>
                        <div className="w-full lg:w-[672px] relative h-[300px] lg:h-[532px] flex flex-col items-start justify-center mt-8 lg:mt-0">
                            <img
                                src={logo}
                                className="w-[200px] h-[200px] lg:w-[390px] lg:h-[390px] object-contain"
                                alt="Sustenance Community Logo"
                            />
                        </div>
                        <p className="text-lg lg:text-[24px] mt-4 lg:mt-[20px] text-white lg:w-[672px] text-left leading-8 lg:leading-9">
                            In many ways, Sustenance reflects how I've grown and who I strive to
                            be. It's a way for me to root myself in purpose while creating
                            something meaningful for others. It helps me guide myself while
                            guiding others. It's a two-way journey—personal yet shared,
                            challenging yet fulfilling, and as beautiful as it is
                            transformative.
                        </p>
                        <p className="text-lg lg:text-[24px] mt-4 lg:mt-[20px] text-white lg:w-[672px] text-left leading-8 lg:leading-9">
                            Sustenance isn't just for others—it's for me first. It's an
                            extension of my journey, intertwining my personal growth with a
                            broader purpose: to uplift and inspire others.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}
