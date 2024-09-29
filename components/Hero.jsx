import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi'

const Hero = () => {
  return (
    <div className="text-center xl:text-left order-2 xl:order-none">
        <h1 className="h1 mb-6">Hi! I'm <br/><span className="text-accent">Dominique Legaspi</span></h1>
        <div className="text-3xl mb-6">Web Developer | UI/UX Designer </div>
        <p className="max-w-[660px] mb-9 text-white/80">
        Every project is an opportunity to create something new — something 
        that not only works well but also feels engaging and intuitive.</p>
        <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
            </Button>
        </div>
    </div>
  )
}

export default Hero