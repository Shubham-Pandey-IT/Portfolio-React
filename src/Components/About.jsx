import { Bug, Code, Palette } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl relative z-10">
                
                {/* Section Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-secondary">
                    About <span className="text-primary">Me</span>
                </h2>
                
                {/* Sub-heading */}
                <h3 className="text-xl md:text-2xl font-semibold text-center text-white mb-10">
                    Full Stack Developer (MERN) & Tech Enthusiast
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-secondary">
                    
                    {/* Left Content */}
                    <div className="space-y-6 text-center md:text-left">
                        <p className="text-muted-foreground leading-relaxed">
                            Hi, I’m <span className="font-semibold">Shubham Pandey</span>, 
                            an aspiring Full Stack Developer skilled in the <span className="font-semibold">MERN stack</span>.  
                            I enjoy building scalable and user-friendly solutions with a strong foundation 
                            in <span className="font-semibold">DSA, OOPs, and core CS concepts</span>.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Currently working as a <span className="font-semibold">Graduate Engineer Trainee at BN Technology</span>, 
                            I’ve contributed to a multi-role delivery platform, created <span className="font-semibold">10+ REST APIs</span>, 
                            improved admin efficiency by 40%, and built features like time tracking and performance analytics.  
                            I’ve also developed real-world projects including <span className="font-semibold">Dev Tinder</span>, 
                            <span className="font-semibold">CodeSync</span>, and <span className="font-semibold">NetflixGPT</span>.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                            <a 
                                href="#contact" 
                                className="px-6 py-2 rounded-full bg-primary text-primary-foreground 
                                font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,93,246,0.5)] hover:scale-105 active:scale-95">
                                Get In Touch
                            </a>
                            <a 
                                href="https://drive.google.com/file/d/1u_qpbY7osaz23X4hBPUJqfrpI90Lg-YM/view" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-6 py-2 rounded-full border border-primary text-primary 
                                hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Skills Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        
                        {/* Web Development */}
                        <div className="group perspective w-full h-48">
                            <div className="relative w-full h-full transition-transform duration-500 transform hover:scale-105 hover:shadow-lg rounded-xl">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500
                                    to-indigo-600 text-white rounded-xl flex flex-col justify-center
                                    items-center px-4">
                                    <Code className="h-8 w-8 mb-2"/>
                                    <h4 className="text-lg font-bold">Web Development</h4>
                                    <p className="text-sm mt-2 text-center">React, Redux, Node.js, Express, MongoDB</p>
                                </div>
                            </div>
                        </div>

                        {/* Problem Solving */}
                        <div className="group perspective w-full h-48">
                            <div className="relative w-full h-full transition-transform duration-500 transform hover:scale-105 hover:shadow-lg rounded-xl">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500 
                                    to-emerald-600 text-white rounded-xl flex flex-col justify-center
                                    items-center px-4">
                                    <Bug className="h-8 w-8 mb-2"/>
                                    <h4 className="text-lg font-bold">Problem Solving</h4>
                                    <p className="text-sm mt-2 text-center">Debugging, Optimization, 200+ DSA Problems</p>
                                </div>
                            </div>
                        </div>

                        {/* UI Design */}
                        <div className="group perspective w-full h-48">
                            <div className="relative w-full h-full transition-transform duration-500 transform hover:scale-105 hover:shadow-lg rounded-xl">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500
                                    to-pink-500 text-white rounded-xl flex flex-col justify-center
                                    items-center px-4">
                                    <Palette className="h-8 w-8 mb-2"/>
                                    <h4 className="text-lg font-bold">UI Design</h4>
                                    <p className="text-sm mt-2 text-center">Tailwind CSS, Material UI, Responsive Interfaces</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Background overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95 -z-10"></div>
        </section>
    )
}
