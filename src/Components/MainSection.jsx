import { ArrowDown } from "lucide-react"

export const MainSection = () => {
    return (
        <section id="main"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        <span className="text-secondary opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Shubham Pandey</span>
                        <span className="text-secondary opacity-0 animate-fade-in-delay-2"> | Full-Stack Developer</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground text-secondary max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Aspiring <span className="font-semibold">Full-Stack Developer (MERN)</span> with hands-on experience in 
                        building web applications, REST APIs, and real-time platforms.  
                        Passionate about problem solving, clean code, and creating solutions that are both 
                        <span className="font-semibold"> functional and user-friendly</span>.
                    </p>
                </div>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" 
                       className="px-6 py-2 rounded-full bg-primary text-primary-foreground 
                       font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,93,246,0.5)] hover:scale-105 active:scale-95">
                        View My Projects
                    </a>
                </div>
            </div>

            <div className="absolute text-secondary bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span>Scroll</span>
                <ArrowDown className="h-6 w-6 text-primary" />
            </div>
        </section>
    )
}
