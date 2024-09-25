import { motion } from "framer-motion"

const blindsAnimation = {
    initial: {
        right: "0%",
    },
    animate: {
        right: "100%",
    },
    exit: {
        right: ["100%", "0%"],
    },
};

// calculate the reverse index for staggered delay
const reverseIndex = (index)=> {
    const totalSteps = 6;
    return totalSteps - index - 1;
};

const Blinds = () => {
  return (
    <>
        {/* render 6 motion divs, each representing a step of the stairs */}
        {[...Array(6)].map((_, index)=> {
            return (
                <motion.div 
                key={index} 
                variants={blindsAnimation} 
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration: 0.6,
                    ease: 'easeInOut',
                    delay: reverseIndex(index) * 0.05
                }} 
                className="h-full w-full bg-[#edb33e] relative"
                />
            );
        })}
    </>
  )
}

export default Blinds;