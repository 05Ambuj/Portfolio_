import { Code2, Monitor, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Monitor size={24} className="text-blue-500" />,
    skills: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/20"
  },
  {
    title: "Backend & APIs",
    icon: <Code2 size={24} className="text-primary" />,
    skills: ["C#", "ASP.NET Core", "Node.js", "RESTful APIs", "Microservices"],
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/20"
  },
  {
    title: "Database & Cloud",
    icon: <Database size={24} className="text-emerald-500" />,
    skills: ["SQL Server", "MongoDB", "Entity Framework", "Azure Services", "Docker"],
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/20"
  },
  {
    title: "Tools & Practices",
    icon: <Wrench size={24} className="text-orange-500" />,
    skills: ["Git/GitHub", "Azure DevOps", "CI/CD", "Agile", "OOP"],
    color: "from-orange-500/20 to-orange-500/5",
    borderColor: "border-orange-500/20"
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-4 relative bg-background">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground tracking-tight">
            Technical <span className="text-primary">Arsenal.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            A comprehensive overview of the modern technologies and tools I leverage to build state-of-the-art software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`glass p-8 rounded-3xl border ${category.borderColor} shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300`}
            >
              {/* Background gradient blob */}
              <div className={`absolute -right-12 -top-12 w-48 h-48 bg-gradient-to-br ${category.color} rounded-full blur-[40px] opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10 flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${category.borderColor} bg-background/50 backdrop-blur-md`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2.5">
                {category.skills.map((skill, subIdx) => (
                  <span
                    key={subIdx}
                    className="px-4 py-2 rounded-xl text-sm font-medium border border-border bg-background/50 hover:bg-white/10 dark:hover:bg-white/5 transition-colors text-muted-foreground hover:text-foreground cursor-default backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
