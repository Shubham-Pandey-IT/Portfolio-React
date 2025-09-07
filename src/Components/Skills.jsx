import { motion } from "framer-motion";

export const Skills = () => {
    const skills = [
        // Languages
        { name: "C++", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Python", level: 70 },

        // Frontend
        { name: "React.js", level: 95 },
        { name: "Redux", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Material UI", level: 85 },

        // Backend
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "REST APIs", level: 90 },

        // Database
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },

        // Tools
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
    ];

    const neonColor = [
        "#ff00cc", // pink
        "#9966ff", // purple
        "#00e6e6", // cyan
        "#ffffff"  // white
    ];

    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center">
                    {skills.map((skill, key) => {
                        const neon = neonColor[key % neonColor.length];
                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, scale: 0.6 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: key * 0.05 }}
                                viewport={{ once: true }}
                                className="relative w-32 h-32 border-2 flex flex-col items-center justify-center rounded-xl text-center"
                                style={{
                                    borderColor: neon,
                                    boxShadow: `0 0 12px 4px ${neon}`,
                                    background: "transparent"
                                }}
                            >
                                <div className="text-2xl font-bold" style={{ color: neon }}>
                                    {skill.level}%
                                </div>
                                <div className="text-sm mt-1 text-secondary uppercase tracking-wide font-medium">
                                    {skill.name}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
