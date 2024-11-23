import React from 'react';
import logo_yellow from '../assets/logo_yellow.svg';

function IntroComponent() {
    return (
        <div>
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
            <div className="lg:w-[1200px] w-full items-center flex flex-col lg:items-start justify-between pt-[235px] px-4 lg:px-0">
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
        </div>
    );
}

export default IntroComponent;
