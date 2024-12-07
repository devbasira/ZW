import React from 'react';
import { motion } from 'framer-motion';
import logo_yellow from '../assets/logo_yellow.svg';
import ExpandableArticle from './ExpandibleArticle';


const articleContent = `Five years ago, I made a decision that changed my life forever. Stepping into Bollywood opened doors to massive popularity, placing me at the center of public attention. I was portrayed as a role model for the youth and a symbol of success, but none of this aligned with my understanding of success or the purpose of my life.

As I reflect on these five years, I confess that this identity and line of work have not brought me true happiness. Despite the applause and admiration, I found myself struggling to reconcile my actions with my beliefs. Though I appeared to fit perfectly in this field, I knew in my heart that I did not belong.

Losing Barakah

While this career brought me love and recognition, it also distanced me from my faith. Slowly, I found my relationship with Allah weakening. I convinced myself that I was in control and that this lifestyle wouldn't affect my beliefs. However, I realized that I had lost Barakah — a blessing that encompasses peace, stability, and contentment.

I struggled internally, battling doubts and desires, trying to align my actions with my faith. Yet, I repeatedly failed. I procrastinated, telling myself that I would change when the time was right. This cycle of self-deception left me spiritually vulnerable, unable to find peace or purpose.

Finding Light in the Qur'an

Eventually, I confronted my weaknesses and sought clarity through the Qur'an and the teachings of the Prophet Muhammad (peace be upon him). Immersing myself in the words of Allah brought peace to my heart. True contentment, I learned, comes from understanding Allah's attributes, His mercy, and His guidance.

I realized that my struggles stemmed from two spiritual diseases mentioned in the Qur'an: doubt and desire. Allah says:

"In their hearts is a disease, and Allah has increased their disease." (Qur'an 2:10)

The cure for these diseases lies in the guidance of Allah. The Qur'an became my compass, reshaping my understanding of success and purpose. True success, I now believe, is fulfilling the purpose of our creation — to worship Allah and live in accordance with His commandments.

A New Perspective

Reflecting on my journey, I began questioning the sources of my ideas of success and meaning. I realized how easily we are deceived by shallow worldly measures of achievement. Allah reminds us in the Qur'an:

"By time, indeed, mankind is in loss, except for those who have believed, done righteous deeds, and advised each other to truth and patience." (Qur'an 103:1-3)

This understanding gave me the strength to take a decisive step toward realigning my life with my faith. Today, I officially disassociate myself from this field — not to portray myself as superior, but to start afresh on a path that aligns with my values and beliefs.

A Message for Others

To those who look up to public figures as role models, I offer this advice: No amount of fame, wealth, or worldly success is worth compromising your faith and peace of mind. Desires are endless, and chasing them only leads to discontent.

Instead, strive to align your life with the guidance of Allah and the Sunnah of His Messenger (peace be upon him). Remember, success is not defined by the standards of this world but by fulfilling the purpose of our creation.

Allah says:

"O you who have believed, if you fear Allah, He will grant you a criterion [to judge between right and wrong]." (Qur'an 8:29)

Do not be swayed by societal pressures or the fear of judgment. Seek knowledge and understanding, and rely on Allah for guidance.

Closing Thoughts

This journey has been exhausting and lonely at times, but it has also been deeply rewarding. As the Prophet Muhammad (peace be upon him) said:

"There will come a time when holding onto the religion will be like holding onto hot coal."

May Allah guide us all to His path, strengthen our faith, and grant us sincerity in our actions. May He cleanse our hearts of hypocrisy, arrogance, and ignorance, and bless us with steadfastness and peace.

Ameen.

– Zaira Wasim`


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
                <div className="w-full lg:w-[672px] relative h-[200px]  lg:h-[450px] flex flex-col items-start">
                    <img
                        src={logo_yellow}
                        className="absolute left-[14px] bottom-[30px] lg:bottom-[63px] w-[100px] lg:w-[300px] h-[128px] lg:h-[350px]"
                        alt="Logo"
                    />
                </div>
                <div className="w-full lg:w-[672px] flex flex-col gap-[30px] lg:gap-[48px]">
                    <h2 className="text-[#0A3C93] font-[700] text-[16px] lg:text-[24px]">
                        \ MY JOURNEY
                    </h2>
                    <div className="gap-[20px] lg:gap-[30px] flex flex-col mt-[10px]">
                        <div className="text-[18px] lg:text-[24px]">
                            The answers I found were calls to action. They needed to be reflected in the way I lived. And so, in 2019, I made the decision to dissociate myself from the world of cinema and
                            <ExpandableArticle
                                hyperlinkText="announced it publicly."
                                articleTitle="A Journey of Self-Realization and Faith"
                                articleDate="June 30, 2019"
                                articleContent={articleContent}
                            />
                        </div>
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
