import React from 'react'
import logo_yellow from '../assets/logo_yellow.svg'
import sustanence_logo from '../assets/sustanence_logo.svg'
import GetInTouch from './GetInTouch'
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { SiSubstack } from "react-icons/si";
export const Footer = () => {

    return (
        <div className="w-screen z-20 bg-[#292B31] flex pt-[150px] pb-[100px] flex-col justify-center items-center">
            <div className="w-full max-w-[1200px] items-center lg:items-start justify-center flex flex-col gap-[64px] px-4">
                {/* <button className="bg-white text-black flex justify-center items-center py-[16px] px-[32px] hover:pointer hover:bg-[#242529] hover:text-white rounded-[50px] hover:border">
                    Get in touch
                </button> */}
                <div className='w-full flex justify-center'>
                    <GetInTouch />
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

                        <div className="flex gap-[20px] md:gap-[50px] w-full md:w-[350px] justify-center md:justify-end">
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

    )
}
