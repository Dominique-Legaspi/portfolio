import Image from "next/image"
const About = () => {
  return (
    <section>
        <div className="h-full">
            <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-between">
                <div className="xl:basis-1/3 m-10 text-center overflow-hidden rounded-full">
                    <Image src="/assets/selfie_dom.png" alt="Selfie image" width="350" height="350" />
                </div>
                <div className="xl:basis-2/3 xl:ml-20 text-center xl:text-left">
                    <h1 className="h1 text-6xl text-accent tracking-wider mb-6">
                        About Me
                    </h1>
                    <p className="text-white/80 mb-4">
                        Hi, my name is <span className="text-accent">Dominique Legaspi</span>, and I am an aspiring Web Developer and UI/UX Designer.
                        Driven by my passion for creativity and intuitivity, I strive to design the front end logic
                        that will bring engagement and promote the user experience.<br/>
                        <span className="text-accent">Simplicity by design! Effective by functionality!</span>
                    </p>
                    <p className="text-white/80">
                        I am currently a 4th-year undergraduate student at <span className="text-accent">California State University, Long Beach</span>.
                        In my free time, I like to build projects and work on mastering Leetcode problems.
                        Every day is a new opportunity to do something great.&nbsp;
                        <span className="text-accent">Why not make something awesome?</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About