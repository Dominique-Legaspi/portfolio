'use client';

import { motion } from 'framer-motion';

const educations = [
    {
        facility: "California State University, Long Beach",
        location: "Long Beach, CA",
        graduation: "Expected May 2025",
    },
    {
        facility: "Modesto Junior College",
        location: "Modesto, CA",
        graduation: "April 2023",
    },
]

const Education = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            <motion.div
               initial={{opacity:0}}
               animate={{opacity:1, transition: {delay: 1.4, duration: 0.4, ease: "easeIn"}}}        
            >
                <h1 className="h1 text-6xl text-accent tracking-wider">Education</h1>
                {educations.map((education, index)=> {
                    return <div key={index}>
                        <div className="mb-4">
                            <div className="p-8">
                                <div className="pb-4"><h2 className="h2 text-accent">
                                    {education.facility}</h2></div>
                                <div className="flex flex-row justify-between items-end pb-4 text-white/70">
                                    <p>{education.location}</p>
                                    <p>{education.graduation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </motion.div>
        </div>
    </section>
  )
}

export default Education