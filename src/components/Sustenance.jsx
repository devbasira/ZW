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
                        <p className="text-[24px] lg:text-[24px] mt-4 lg:mt-[20px] text-white lg:w-[672px] text-left leading-8 lg:leading-9">
                        Sustenance is an attempt—an honest, imperfect, but deeply heartfelt attempt—to create a space where women like me can feel seen, supported, and understood. It’s not just about building a community; it’s about carving out a little corner in the world where faith, growth, and connection can thrive together.
                        </p>
                        <p className="text-[24px] lg:text-[24px] mt-4 lg:mt-[20px] text-white lg:w-[672px] text-left leading-8 lg:leading-9">
                        In many ways, Sustenance is for me as much as it is for others. It’s a way of navigating my own questions, struggles, and aspirations while offering a hand to those on similar journeys. As I create this space, I find myself growing alongside it—learning, healing, and finding clarity in the process.
                        </p>
                        <p className="text-[24px] lg:text-[24px] mt-4 lg:mt-[20px] text-white lg:w-[672px] text-left leading-8 lg:leading-9">
                        This isn’t about having it all figured out; it’s about trying. Trying to build something meaningful for women who, like me, are searching for comfort in connection and purpose in their growth. Sustenance is a shared path—one that’s challenging but deeply rewarding, and one I’m honored to walk with others.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}
