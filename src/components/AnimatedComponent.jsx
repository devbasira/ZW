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
      <motion.div className="relative row-span-1 w-[1200px]  h-[1749px] flex justify-center">
        <div className="absolute top-[15%] -z-30 left-[1%]">
        <motion.h1
          className="fixed   text-[275px] text-white font-[900] z-10"
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
          className="fixed -z-25 bottom-0 top-[10%] w-[890px] h-[1200px] object-cover z-0"
        />
        <div className="absolute top-[25%] left-[35%]">
        <motion.h1
          className="fixed opacity-2  text-[275px] text-white/[.35] font-[900] z-10"
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
