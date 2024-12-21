import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import photo from '../assets/ZW_Yellow.png'
import '../App.css'
const AnimatedSection = () => {
  const { scrollYProgress } = useScroll();

  const upperTextX = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const lowerTextX = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const backgroundSize = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    ["150% 150%", "140% 140%", "130% 130%"]
  );
//top-[45%]
  return (
    <motion.div className="background bg-[#FBB00A] -z-20 relative grid grid-rows-1 place-content-center"
      style={{ backgroundSize }}
    >
      <motion.div className="relative row-span-1 w-full lg:w-[1200px] h-screen md:h-[1749px] lg:h-[1749px] flex items-center justify-center">
        <div className="absolute bottom-[60%] md:bottom-[70%] md:right-60 md:mr-32 ipad-pro:bottom-[75%] text:start lg:bottom-[90%] -z-30 right-48 lg:left-[1%]"
        >
          <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1,}}
          transition={{ duration: 2.0, ease: "easeOut",delay: 0.5 }}
            className="fixed text-[100px] lg:text-[18rem] md:text-[275px] text-white font-[900] z-10"
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1,}}
          transition={{ duration: 3.0, ease: "easeOut" }}
          className="fixed -z-25 bottom-[-5%] lg:bottom-[0%] w-auto h-[75vh] md:w-[600px] md:h-[750px]  lg:h-[80vh] lg:w-auto object-contain z-0"
        />
        <div className="absolute bottom-[52%] ipad-pro:bottom-[65%] lg:bottom-[80%] md:bottom-[61%] right-24 md:right-60 lg:left-[35%]">
          <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1,}}
          transition={{ duration: 2.0, ease: "easeOut", delay:0.5}}
            className="fixed opacity-2 text-[100px] lg:text-[18rem] md:text-[275px]  text-white/[.35] font-[900] z-10"
            style={{
              x: lowerTextX,
              opacity: textOpacity,
            }}
          >
            wasim
          </motion.h1>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default AnimatedSection;
// lg:w-[570px]