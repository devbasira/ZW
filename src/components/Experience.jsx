import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo_yellow from '../assets/logo_yellow.svg';
import QuranAya from './QuranAya';

function Experience() {
    const [isExpanded, setIsExpanded] = useState(false);
    const articleRef = useRef(null);

    const scroll = () => {
        articleRef.current
        setTimeout(() => {
            articleRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
    }

    return (
        <motion.div
            className="w-screen bg-[#f3f3f3] flex flex-col items-center overflow-y-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: 'easeOut', delay: 0.5 }}
                className="w-full flex flex-col items-center justify-between 
                pt-[80px] pb-[80px] pl-[25px] pr-[50px]
                lg:w-[1200px] lg:ml-2 lg:items-start lg:pt-[235px] lg:pb-[235px] lg:pl-[0px] lg:pr-[0px]
                md:pt-[150px] md:pb-[150px] md:px-[10%]
                ipad-pro:pt-[200px] ipad-pro:pb-[200px] ipad-pro:px-[10%]">
                <div className="w-full lg:w-[672px] relative h-[200px] lg:h-[450px] flex flex-col items-start">
                    <img
                        src={logo_yellow}
                        className="absolute bottom-[30px] lg:bottom-[63px] w-[130px] lg:w-[275px] h-auto lg:h-[350px]"
                        alt="Logo"
                    />
                </div>
                <div className="w-full lg:w-[672px] flex flex-col gap-[30px] lg:gap-[48px]">
                    <h2 className="text-[#0A3C93] font-[700] text-[18px] lg:text-[24px]">
                        \ MY JOURNEY
                    </h2>
                    <div className="gap-[20px] lg:gap-[30px] flex flex-col mt-[10px]">
                        <div className='flex'>
                            <p className="text-[18px] lg:text-[24px]">
                                The answers I found were calls to action. They needed to be reflected in the way I lived. And so, in 2019, I made the decision to dissociate myself from the world of cinema and{' '}
                                <span
                                    onClick={() => {
                                        setIsExpanded(!isExpanded)
                                        if (!isExpanded) {
                                            scroll()
                                        }
                                    }}
                                    className="text-[18px] lg:text-[24px] text-[#0A3C93] hover:text-[#FBB00A] font-medium cursor-pointer"
                                >
                                    announced it publicly.
                                </span>
                            </p>
                        </div>
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    ref={articleRef}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="z-20 py-[10px] mb-[20px] lg:mb-[0px] overflow-x-auto  custom-scrollbar"
                                >
                                    <div className='h-[60vh]'>
                                        <div
                                            className=' pl-[30px]  pr-[30px] relative' >
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h2 className="lg:text-[24px] text-[18px] font-bold text-gray-800 mb-1">
                                                        A Journey to Find Purpose
                                                    </h2>
                                                    <p className="text-[16px] text-gray-500">30 June, 2019</p>
                                                </div>
                                            </div>
                                            <div className="prose text-[18px] prose-sm max-w-none text-gray-600">
                                                <div className="prose text-[18px] prose-sm max-w-none text-gray-600">
                                                    <p>Five years ago, I made a decision that changed my life forever. Stepping into Bollywood opened doors to massive popularity, placing me at the center of public attention. I was portrayed as a role model for the youth and a symbol of success, but none of this aligned with my understanding of success or the purpose of my life.</p>
                                                    <p> As I reflect on these five years, I confess that this identity and line of work have not brought me true happiness. Despite the applause and admiration, I found myself struggling to reconcile my actions with my beliefs. Though I appeared to fit perfectly in this field, I knew in my heart that I did not belong.</p>
                                                    <h3 className="lg:text-[21px] text-[18px] font-semibold mt-6 mb-3">Losing Barakah</h3>
                                                    <p>While this career brought me love and recognition, it also distanced me from my faith. Slowly, I found my relationship with Allah weakening. I convinced myself that I was in control and that this lifestyle wouldn't affect my beliefs. However, I realized that I had lost Barakah — a blessing that encompasses peace, stability, and contentment.</p>
                                                    <p>I struggled internally, battling doubts and desires, trying to align my actions with my faith. Yet, I repeatedly failed. I procrastinated, telling myself that I would change when the time was right. This cycle of self-deception left me spiritually vulnerable, unable to find peace or purpose.</p>

                                                    <h3 className="lg:text-[21px] text-[18px] font-semibold mt-6 mb-3">Finding Light in the Qur'an</h3>
                                                    <p>Eventually, I confronted my weaknesses and sought clarity through the Qur'an and the teachings of the Prophet Muhammad (peace be upon him). Immersing myself in the words of Allah brought peace to my heart. True contentment, I learned, comes from understanding Allah's attributes, His mercy, and His guidance.</p>
                                                    <p>I realized that my struggles stemmed from two spiritual diseases mentioned in the Qur'an: doubt and desire. Allah says:</p>
                                                    <QuranAya ayat={"In their hearts is a disease, and Allah has increased their disease."} index={"Qur'an 2:10"} />
                                                    <p>The cure for these diseases lies in the guidance of Allah. The Qur'an became my compass, reshaping my understanding of success and purpose. True success, I now believe, is fulfilling the purpose of our creation — to worship Allah and live in accordance with His commandments.</p>

                                                    <h3 className="lg:text-[21px] text-[18px] font-semibold mt-6 mb-3">A New Perspective</h3>
                                                    <p>Reflecting on my journey, I began questioning the sources of my ideas of success and meaning. I realized how easily we are deceived by shallow worldly measures of achievement. Allah reminds us in the Qur'an:</p>
                                                    <QuranAya ayat={'By time, indeed, mankind is in loss, except for those who have believed, done righteous deeds, and advised each other to truth and patience.'} index={"Qur'an 103:1-3"} />
                                                    <p>This understanding gave me the strength to take a decisive step toward realigning my life with my faith. Today, I officially disassociate myself from this field — not to portray myself as superior, but to start afresh on a path that aligns with my values and beliefs.</p>

                                                    <h3 className="lg:text-[21px] text-[18px] font-semibold mt-6 mb-3">A Message for Others</h3>
                                                    <p>To those who look up to public figures as role models, I offer this advice: No amount of fame, wealth, or worldly success is worth compromising your faith and peace of mind. Desires are endless, and chasing them only leads to discontent.</p>
                                                    <p>Instead, strive to align your life with the guidance of Allah and the Sunnah of His Messenger (peace be upon him). Remember, success is not defined by the standards of this world but by fulfilling the purpose of our creation.</p>
                                                    <QuranAya ayat={"O you who have believed, if you fear Allah, He will grant you a criterion [to judge between right and wrong] ."} index={"Qur'an 8:29"} />
                                                    <p>Do not be swayed by societal pressures or the fear of judgment. Seek knowledge and understanding, and rely on Allah for guidance.</p>
                                                    <h3 className="lg:text-[21px] text-[18px] font-semibold mt-6 mb-3">Closing Thoughts</h3>
                                                    <p>This journey has been exhausting and lonely at times, but it has also been deeply rewarding. As the Prophet Muhammad (peace be upon him) said:</p>
                                                    <QuranAya ayat={"There will come a time when holding onto the religion will be like holding onto hot coal"} index={"Jami` at-Tirmidhi 2260"}/>
                                                    <p className="italic text-gray-600">Ameen.</p>
                                                    <p className="font-semibold text-gray-600">Zaira Wasim</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <h2 className="text-[18px] bg-[#f3f3f3] lg:text-[24px]">
                            It’s been almost five years since then—the same length of time I spent in the industry.
                        </h2>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Experience;
