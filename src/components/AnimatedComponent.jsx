import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import photo from '../assets/zw_photo.png'

const AnimatedSection = () => {
  const { scrollYProgress } = useScroll();

  const upperTextX = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const lowerTextX = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div className="h-[1500px] bg-[#FBB00A] -z-20 relative">
      <motion.div className="relative w-full h-[650px] relative flex justify-center">
      <motion.h1
          className="fixed -z-30 top-[320px] left-[200px] transform -translate-x-1/2 text-[275px] text-white font-[900] z-10"
          style={{
            x: upperTextX,
            opacity: textOpacity,
          }}
        >
          zaira 
        </motion.h1>
        <motion.img
          src={photo}
          alt="Background"
          className="fixed -z-25 bottom-0 top-[100px] w-[750px] h-[1000px] object-cover z-0"
        />
        <motion.h1
          className="fixed opacity-2 bottom-[50px] left-1/3 transform -translate-x-1/2 text-[275px] text-white/[.35] font-[900] z-10"
          style={{
            x: lowerTextX,
            opacity: textOpacity,
          }}
        >
          wasim
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default AnimatedSection;
