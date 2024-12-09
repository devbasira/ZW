import React, { useState, useRef, useEffect } from 'react';
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { SiSubstack } from "react-icons/si";
import { motion, AnimatePresence } from 'framer-motion';
import logo_yellow from '../assets/logo_yellow.svg';
import sustanence_logo from '../assets/sustanence_logo.svg';

export const Footer = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedData, setSubmittedData] = useState(undefined);
    const formRef = useRef(null);
    const ref = useRef(null);


    const handleSubmit = async (formData) => {
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        console.log('Form submitted:', { name, email, message });
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setSubmittedData({ name, email, message });
        setIsSubmitted(true);
        setIsExpanded(false);
    };

    const handleCancel = () => {
        setIsExpanded(false);
    };

    const handleClick = () => {
        if (isSubmitted) {
            setIsSubmitted(false);
            setSubmittedData(undefined);
        }
        setIsExpanded((prev) => !prev);

        setTimeout(() => {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 300);
    };

    return (
        <div ref={ref} className="w-screen z-20 bg-[#292B31] flex pt-[150px] pb-[100px] flex-col justify-center items-center">
            <div className="w-full max-w-[1200px] items-center lg:items-start justify-center flex flex-col gap-[64px] px-4">
                <div className="w-full flex justify-center">
                    <div className="lg:w-full md:w-full space-y-4">
                        {!isExpanded && (
                            <div className="space-y-4">
                                {isSubmitted ? (
                                    <div className=''>
                                        <div className='text-[#FBB00A] text-[24px] font-medium'>Thanks for your interest</div>
                                        {submittedData && (
                                            <div className="mt-2 text-[16px] text-[#f3f3f3]">
                                                <div>{submittedData.name}</div>
                                            </div>
                                        )}
                                    </div>) : (<button
                                        onClick={handleClick}
                                        className="bg-[#FBB00A] text-[18px] text-black flex justify-center items-center py-[2px] px-[20px] hover:pointer hover:bg-white  rounded-[50px]"
                                    >
                                        GET IN TOUCH
                                    </button>
                                )}
                            </div>
                        )}
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <form ref={formRef} onSubmit={async (e) => {
                                        e.preventDefault();
                                        const formData = new FormData(e.currentTarget);
                                        await handleSubmit(formData);
                                    }} className="space-y-12 py-8">
                                        <div>
                                            <h2 className="text-white font-[700] text-[16px] lg:text-[24px]">
                                                Get In Touch
                                            </h2>
                                        </div>
                                        <div className="space-y-12">
                                            <div className=" relative">
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    defaultValue={submittedData?.name}
                                                    className="peer w-full text-gray-300 bg-transparent border-b border-zinc-700 py-3 outline-none transition-colors focus:border-zinc-100 placeholder:text-transparent"
                                                    placeholder="Name"
                                                />
                                                <label
                                                    htmlFor="name"
                                                    className="absolute left-0 -top-6 text-sm text-white peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm transition-all"
                                                >
                                                    Name
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    defaultValue={submittedData?.email}
                                                    className="peer w-full text-gray-300 bg-transparent border-b border-zinc-700 py-3 outline-none transition-colors focus:border-zinc-100 placeholder:text-transparent"
                                                    placeholder="Email"
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className="absolute left-0 -top-6 text-sm text-white peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm transition-all"
                                                >
                                                    Email
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    required
                                                    rows={4}
                                                    defaultValue={submittedData?.message}
                                                    className="peer w-full bg-transparent border-b text-gray-300 border-zinc-700 py-3 outline-none transition-colors  placeholder:text-transparent resize-none"
                                                    placeholder="Message"
                                                />
                                                <label
                                                    htmlFor="message"
                                                    className="absolute left-0 -top-6 text-sm text-white peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm transition-all"
                                                >
                                                    Message
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <button
                                                type="submit"
                                                className="bg-[#FBB00A] text-[18px] text-black flex justify-center items-center py-[2px] px-[20px] hover:pointer hover:bg-white  rounded-[50px]"
                                            >
                                                Submit
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleCancel}
                                                className="px-4 py-2 text-red-400 hover:text-red-300 transition-colors"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-[40px]">
                    <div className="w-full flex flex-col md:flex-row gap-[40px] md:gap-[200px]">
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8 text-sm">
                            <a
                                href="https://substack.com/"
                                className="hover:underline transition duration-200 text-white text-[22px] leading-8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiSubstack className="text-white w-6 h-6" />
                            </a>
                            <a
                                href="https://www.instagram.com/zairawasim_/"
                                className="hover:underline transition duration-200 text-white text-[22px] leading-8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IoLogoInstagram className="text-white w-9 h-9" />
                            </a>
                            <a
                                href="https://x.com/ZairaWasimmm"
                                className="hover:underline transition duration-200 text-white text-[22px] leading-8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaXTwitter className="text-white w-7 h-7" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/zaira-wasim-16a11a1b2/"
                                className="hover:underline transition duration-200 text-white text-[22px] leading-8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <TiSocialLinkedin className="text-white w-10 h-10" />
                            </a>
                        </div>
                        <div className="flex gap-[20px] md:gap-[50px] w-full md:w-[350px] justify-center md :justify-end">
                            <img
                                className="w-[60px] h-[60px]"
                                src={sustanence_logo}
                                alt="Logo 1"
                            />
                            <img
                                className="w-[60px] h-[60px]"
                                src={logo_yellow}
                                alt="Logo 2"
                            />
                        </div>
                    </div>
                    <div className="text-[16px] text-white text-center md:text-left">
                        © 2024 — Designed at{" "}
                        <span className="text-[#FBB00A] font-medium">Basira</span>
                    </div>
                </div>
            </div>
        </div>
    );
};