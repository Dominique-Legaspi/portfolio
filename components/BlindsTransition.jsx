"use client";

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Blinds from "./Blinds";

const BlindsTransition = () => {
    const pathname = usePathname();

    return (
        <>
            <AnimatePresence mode="wait">
                <div key={pathname}>
                    <div 
                    className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"
                    >
                        <Blinds/>
                    </div>
                </div>

                {/* <motion.div 
                className="h-screen w-screen fixed bg-primary top-0 pointer-events-none" 
                initial={{opacity: 1}}
                animate={{opacity: 0, transition: {delay: 0.2, duration: 0.4, ease: 'easeOut'}}}
                /> */}

            </AnimatePresence>
        </>
    )
}

export default BlindsTransition