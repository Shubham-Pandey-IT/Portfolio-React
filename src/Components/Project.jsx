import { ExternalLink, ImportIcon } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Dev Tinder",
    description:
      "Developer matchmaking platform with real-time chat, skill-based matching, and premium features.",
    image:
      "https://www.datingsitesreviews.com/images/articles/tinder-matchmaker-screenshots-large-2023-10.jpg",
    url: "https://dev-tinder-web-eight.vercel.app/",
    tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Socket.io"],
  },
  {
    id: 2,
    title: "CodeSync",
    description:
      "Real-time collaborative code editor supporting 10+ languages with WebSocket sync and Redis optimization.",
    image:
      "https://repository-images.githubusercontent.com/745411638/f2ff988b-ee07-4ca3-b6c3-6784735026d6",
    url: "https://github.com/Shubham-Pandey-IT", // replace if you host it
    tags: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "MongoDB",
      "Redis",
      "Socket.io",
    ],
  },
  {
    id: 3,
    title: "NetflixGPT",
    description:
      "Movie streaming app with Firebase authentication and TMDB API integration for personalized search.",
    image:
      "https://camo.githubusercontent.com/564904f389f25d6323d6657203f8b3f455c028efe77c7f9fcbe7953aaf61fb65/68747470733a2f2f6f6b6e656572616a2e6769746875622e696f2f6e6574666c69782d6770742f73637265656e73686f742f30352d4d6f7669652d4c6973742e706e67",
    url: "https://netflix-gpt-green-three.vercel.app/",
    tags: ["React", "Redux", "Firebase", "Tailwind", "TMDB API"],
  },
];

export const Project = () => {
  return (
    <section id="projects" className="py-24 px-2 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
          Here are some of my key projects — each built with attention to
          scalability, performance, and clean design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-secondary">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.url}
                    className="text-primary px-2 py-2 transition-colors duration-300"
                  >
                    <ExternalLink />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
