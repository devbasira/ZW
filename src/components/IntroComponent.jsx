import React from 'react';
import logo_yellow from '../assets/logo_yellow.svg';
import logo from '../assets/sustanence_logo.svg'

function IntroComponent() {
    return (
        <div className='w-screen flex flex-col items-center '>
            <div className="lg:w-[1200px] w-full md:items-center items-center flex flex-col lg:items-start justify-between pt-[235px] gap-[100px] px-4 lg:px-0">
                <h2 className="text-[26px] text-[#FBB00A]">
                    السلام عليكم!
                </h2>
                <div className="w-full lg:w-[922px] gap-[20px] flex flex-col">
                    <p className="text-[36px] lg:text-[44px]">
                        Hi, I’m Zaira Wasim.
                    </p>
                    <p className="text-[36px] lg:text-[44px]">
                        If my name sounds familiar, it’s probably because you know me from my time in Bollywood.
                    </p>
                </div>
            </div>
            <div className="lg:w-[1200px] w-full items-center flex flex-col lg:items-end justify-between pt-[235px] px-4 lg:px-0">
                <div className="w-full lg:w-[668px] flex flex-col gap-[48px]">
                    <h2 className="text-gray-400 text-[18px] lg:text-[22px]">
                        \ MY PAST
                    </h2>
                    <p className="text-[20px] lg:text-[24px] mt-[20px]">
                        I was part of the industry for years, but while being there, I felt a void—an unexplainable longing for something I couldn’t name or make sense of. Though I seemed to fit perfectly into that world, I knew deep down I didn’t truly belong there.
                    </p>
                    <h2 className="text-gray-400 text-[18px] lg:text-[22px]">
                        \/ THE TRANSITION
                    </h2>
                    <div className="gap-[20px] flex flex-col mt-[10px]">
                        <h2 className="text-[20px] lg:text-[24px] text-[#FBB00A]">
                            What we don’t confront remains unchanged.
                        </h2>
                        <p className="text-[20px] lg:text-[24px]">
                            So, I decided to confront this feeling and began a journey of self-discovery. I asked myself questions—some uncomfortable and difficult ones. The result of the journey was realizing that the life I was living wasn’t aligned with my innate nature or the purpose I was seeking.
                        </p>
                    </div>
                </div>
            </div>
            <div className="lg:w-[1200px] w-full items-center flex flex-col lg:items-start justify-between pt-[235px] pb-[235px] px-4 lg:px-0">
                <div className="w-full lg:w-[672px] relative h-[600px] flex flex-col items-start">
                    <img src={logo_yellow} className="absolute left-[14px] bottom-[63px] w-[150px] lg:w-[300px] h-[192px] lg:h-[384px]" alt="" />
                </div>
                <div className="w-full lg:w-[672px] flex flex-col gap-[48px]">
                    <h2 className="text-gray-400 text-[18px] lg:text-[22px]">
                        \ MY JOURNEY
                    </h2>
                    <div className="gap-[30px] flex flex-col mt-[10px]">
                        <p className="text-[20px] lg:text-[24px]">
                            The answers I found were calls to action. They needed to be reflected in the way I lived. And so, in 2019, I made the decision to dissociate myself from the world of cinema and
                            <p className="text-[#a80d28] underline">
                                announced it publicly.
                            </p>
                        </p>
                        <p className="text-[20px] lg:text-[24px]">
                            It’s been almost five years since then—the same length of time I spent in the industry.
                        </p>
                        <p className="text-[20px] lg:text-[24px]">
                            Over these years, I’ve tried to embrace a life of meaning, purpose, and intention, even when it didn’t make sense to many.
                        </p>
                        <p className="text-[20px] lg:text-[24px]">
                            What I’ve learned hasn’t just transformed my inner world—it’s shaped how I show up, how I connect with others, and what I wish to bring to the world.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#0A3C93] py-16 lg:py-[235px] px-4 lg:px-0">
                <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-8 lg:gap-[48px]">
                    <div className='w-full flex gap-6'>
                        <div className='w-2 lg:w-[8px] h-9 lg:h-[36px] bg-[#FBB00C]' />
                        <h2 className='text-white text-lg lg:text-[22px]'>SUSTENANCE.COMMUNITY</h2>
                    </div>
                    <div className='w-full flex flex-col items-center lg:items-start justify-center'>
                        <p className='text-[40px] lg:text-[44px] text-white lg:w-[922px] text-center lg:text-left'>
                            This journey now extended into my effort to build Sustenance Community.
                        </p>
                        <div className="w-full lg:w-[672px] relative h-[300px] lg:h-[532px] flex flex-col items-center lg:items-start justify-center mt-8 lg:mt-0">
                            <img src={logo} className="w-[200px] h-[200px] lg:w-[390px] lg:h-[390px] object-contain" alt="Sustenance Community Logo" />
                        </div>
                        <p className="text-lg lg:text-[28px] mt-4 lg:mt-[20px] text-white lg:w-[922px] text-center lg:text-left leading-10">
                            In many ways, Sustenance reflects how I've grown and who I strive to be. It's a way for me to root myself in purpose while creating something meaningful for others. It helps me guide myself while guiding others. It's a two-way journey—personal yet shared, challenging yet fulfilling, and as beautiful as it is transformative.
                        </p>
                        <p className="text-lg lg:text-[28px] mt-4 lg:mt-[20px] text-white lg:w-[922px] text-center lg:text-left leading-10">
                            Sustenance isn't just for others—it's for me first. It's an extension of my journey, intertwining my personal growth with a broader purpose: to uplift and inspire others.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroComponent;
