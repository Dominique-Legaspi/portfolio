import Photo from "@/components/Photo"
import Link from "next/link"
import Hero from "@/components/Hero"

import { RiArrowDownSLine } from 'react-icons/ri'
import Experience from "@/components/Experience"

const Home = () => {
  return (
    <section className="h-full">
        <div className="container mx-auto h-full">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                <Hero />
                <div className="order-1 xl:order-none mb-8 xl:mb-0">
                    <Link href="/about"><Photo /></Link>
                </div>
            </div>
            <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 text-accent animate-bounce">
                    <RiArrowDownSLine size={50}/>
            </div>
        </div>
        <div className="mt-44 container mx-auto h-full">
            <Experience/>
        </div>
    </section>
  )
}

export default Home
