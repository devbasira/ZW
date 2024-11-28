import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import photo from '../assets/zw_photo.png'

const AnimatedSection = () => {
  const { scrollYProgress } = useScroll();

  const upperTextX = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const lowerTextX = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div className="bg-[#FBB00A] -z-20 relative grid grid-rows-1 place-content-center">
      <motion.div className="relative row-span-1 w-full lg:w-[1200px] h-screen md:h-[1749px] lg:h-[1749px] flex items-center justify-center">
        <div className="absolute top-[25%] lg:top-[13%] -z-30 right-48  lg:left-[1%]">
        <motion.h1
          className="fixed  text-[100px] lg:text-[275px] md:text-[275px] text-white font-[900] z-10"
          style={{
            x: upperTextX,
            opacity: textOpacity,
          }}
        >
          zaira 
        </motion.h1>
        </div>
      
        <motion.img
          src={photo}
          alt="Background"
          className="fixed -z-25 bottom-0 lg:top-[13%] w-[450px] h-[600px] md:w-[600px] md:h-[750px] lg:w-[750px] lg:h-[1000px] object-cover z-0"
        />
        <div className="absolute top-[35%] lg:top-[22%] right-24 lg:left-[35%]">
        <motion.h1
          className="fixed opacity-2 text-[100px] lg:text-[275px] md:text-[275px]  text-white/[.35] font-[900] z-10"
          style={{
            x: lowerTextX,
            opacity: textOpacity,
          }}
        >
          wasim
        </motion.h1>
        </div>
        
      </motion.div>
    </div>
  );
};

export default AnimatedSection;
