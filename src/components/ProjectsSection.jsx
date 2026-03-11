import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ProjecTron",
    description: "Enterprise project management platform with robust RBAC, JWT auth, and async notification services for multi-tenant organizations.",
    image: "/projects/projectron.png",
    tags: ["React", "TypeScript", "ASP.NET Core", "Azure", "Docker"],
    demoUrl: "https://pip-pas-frontend-am.azurewebsites.net/",
    githubUrl: "https://github.com/05Ambuj/ProjecTron",
  },
  {
    id: 2,
    title: "CineBook",
    description: "Full-stack movie ticket booking system featuring real-time seat validation, secure payment processing, and event-driven email confirmations.",
    image: "/projects/mtbs.png",
    tags: ["React", "ASP.NET Core", "SQL Server", "EF Core", "Azure"],
    demoUrl: "https://aip-training-modsol-as-mtbs-frontend-am.azurewebsites.net/",
    githubUrl: "https://github.com/05Ambuj/MTBS",
  },
  {
    id: 3,
    title: "Wiggle",
    description: "A dynamic social media platform boasting real-time updates, integrated chats, and a highly interactive user interface.",
    image: "/projects/image.png",
    tags: ["React", "MongoDB", "Node.js", "Socket.io", "TailwindCSS"],
    demoUrl: "https://wiggle-v5ys.onrender.com/",
    githubUrl: "https://github.com/05Ambuj/wiggle",
  },
  {
    id: 4,
    title: "Campistan",
    description: "A beautiful campsite discovery application engineered with a strong focus on user experience and seamless performance.",
    image: "/projects/p11.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
    demoUrl: "https://campistan.vercel.app/",
    githubUrl: "https://github.com/05Ambuj/Campistan",
  },
  {
    id: 5,
    title: "Escapo",
    description: "A highly responsive frontend clone of X (Twitter) implementing sophisticated real-time features and polished aesthetics.",
    image: "/projects/p21.png",
    tags: ["React", "TailwindCSS", "ImageKit"],
    demoUrl: "https://esc-2.vercel.app/",
    githubUrl: "https://github.com/05Ambuj/Escapo",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-4 relative bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-[-20%] w-[70vw] h-[70vw] bg-blue-500/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-6">
              Selected <span className="text-primary">Works.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Showcasing a collection of engineered solutions where design meets performance.
            </p>
          </div>
        </div>

        <div className="space-y-32">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center group`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-[60%] relative">
                <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10 rounded-3xl"></div>
                <div className="relative glass rounded-[2rem] overflow-hidden border border-white/10 aspect-[4/3] w-full group-hover:-translate-y-2 transition-transform duration-700 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-[40%] flex flex-col justify-center space-y-8">
                <div>
                  <div className="text-primary font-mono text-sm tracking-widest mb-4 opacity-80">0{idx + 1}</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="glass p-6 rounded-2xl border-white/5 relative bg-background/50 shadow-lg">
                    <p className="text-muted-foreground text-lg leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-secondary/30 rounded-lg border border-border">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors group/link"
                  >
                    <Github size={22} className="group-hover/link:-translate-y-0.5 transition-transform" /> Code
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors group/link"
                  >
                    <ExternalLink size={22} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-32">
          <a
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full border border-border bg-background/50 hover:bg-primary hover:text-white hover:border-primary text-foreground font-medium transition-all duration-300 backdrop-blur-sm text-lg"
            target="_blank"
            href="https://github.com/05Ambuj"
          >
            View Full Archive on GitHub <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
