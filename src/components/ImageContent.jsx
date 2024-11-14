import React from 'react'
import pic from '../assets/pic.avif'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const ImageContent = () => {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.1 } // Trigger the animation when 10% of the element is visible
        );

        const element = document.getElementById('scroll-trigger');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <div className="flex justify-center">
            <motion.h1
                id="scroll-trigger"
                initial={{ opacity: 0, y: 80 }}
                animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 50,
                }}
                transition={{ duration: 2.0, ease: "easeOut" }}
            >
                <div className="gap-8 flex flex-col bg-white w-full max-w-[1800px] px-4 md:px-16 lg:px-20 py-12 lg:py-[60px]">
                    <div className="w-full md:w-8/12">
                        <h2 className="text-[24px] md:text-[38px] ">
                            A Journey to Authenticity: My Story
                        </h2>
                        <h3 className="text-[20px] md:text-[24px] font-light">
                            Now, I channel my creativity into writing, creating, and building 'sustenance.community,' a women-only space that fosters connection, growth, and empowerment.
                        </h3>
                    </div>
                    <div className="relative">
                        <img
                            className="w-full h-auto transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-75"
                            src={pic}
                            alt=""
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"></div>
                    </div>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                        <div className='flex flex-col'>
                            <h2 className='text-2xl'>sustenance.community</h2>
                            <h2 className='text-[#A4A4A4]'>women-only community</h2>
                        </div>
                        <div>
                            <p className='text-[#A4A4A4]'>
                                My mission is to inspire women to embrace their individuality while honoring their faith and values. Through creative work and community building, I aim to empower women to live fulfilling lives of purpose and authenticity.
                            </p>
                        </div>
                    </div>

                </div>
            </motion.h1>
        </div>

    );
}
