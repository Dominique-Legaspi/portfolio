"use client";

import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link';
import { 
  PythonOriginal,
  CplusplusOriginal,
  JavascriptOriginal,
  ReactOriginal,
  NextjsOriginal
 } from 'devicons-react';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Web Developer",
    company: "Another company",
    years: "2020 - current",
    description: 
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Web Developer",
    company: "Another company",
    years: "2020 - current",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]

const Experience = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1, transition: {delay: 1.4, duration: 0.4, ease: "easeIn"}}}
        >
          <h1 className="h1 text-6xl text-accent tracking-wider">Experience</h1>
          {experiences.map((experience, index)=> {
            return <div key={index}>
              <div className="mb-4">
                <div className="p-8">
                  <div className="flex flex-row justify-between items-end pb-4"><h2 className="h2 text-accent">
                    {experience.title}</h2> <p>{experience.years}</p></div>
                  <p className="text-white/70">{experience.company}</p>
                  <p className="pb-16">{experience.description}</p>
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              </div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience