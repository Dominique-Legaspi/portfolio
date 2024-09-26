"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1, transition: {
                delay: 1,
                duration: 0.2,
                ease: "easeInOut"
            }}}
            className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]
            mix-blend-lighten">
                <Image 
                src="/assets/chibiself.png" 
                priority
                quality={100} 
                fill
                alt="Profile image" 
                className="object-contain"
                />
            </motion.div>
        </div>
  );
};

export default Photo