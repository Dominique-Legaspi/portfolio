import Photo from "@/components/Photo"
import Social from "@/components/Social"
import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi'

const Home = () => {
  return (
    <section className="h-full">
        <div className="container mx-auto h-full">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                <div className="text-center xl:text-left order-2 xl:order-none">
                    <h1 className="h1 mb-6">Hi! I'm <br/><span className="text-accent">Dominique Legaspi</span></h1>
                    <span className="text-xl">Web Developer | UI/UX Designer </span>
                    <p className="max-w-[660px] mb-9 text-white/80">
                    Every project is an opportunity to create something new — something 
                    that not only works well but also feels engaging and intuitive.</p>
                    <div className="flex flex-col xl:flex-row items-center gap-8">
                        <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                            <span>Download Resume</span>
                            <FiDownload className="text-xl" />
                        </Button>
                        <div className="mb-8 xl:mb-0">
                            <Social 
                            containerStyles="flex gap-6" 
                            iconStyles="w-[120px] h-9 gap-2 border border-accent rounded-full 
                            flex justify-center items-center 
                            text-accent text-base lowercase
                            hover:bg-accent hover:text-primary hover:transition-all duration-500"
                            />
                        </div>

                    </div>
                </div>
                <div className="order-1 xl:order-none mb-8 xl:mb-0">
                    <Photo />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home
