import { ArrowRight, Code, Database, Layout } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden bg-secondary/5">
      {/* Decorative Background */}
      <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Large Sticky Header */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.1]">
              Engineering <br />
              <span className="text-primary">Impact.</span>
            </h2>
            <div className="w-20 h-1 bg-primary/50 rounded-full"></div>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              I build scalable enterprise applications that solve real business problems with elegant code.
            </p>
            <div className="pt-4 hidden lg:block">
              <a
                href="https://drive.google.com/file/d/11VTSTujtRV8tLFawvhr7tI8C4MjfdMl1/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-blue-400 transition-colors group"
              >
                View Full Resume <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Content Stream */}
          <div className="w-full lg:w-2/3 space-y-12">
            
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground font-light leading-relaxed">
              <p className="text-xl text-foreground font-medium mb-6">
                Hello! I'm Ambuj, a Software Engineer with experience in building robust full-stack solutions.
              </p>
              <p>
                My journey in tech involves crafting high-performance backend microservices and matching them with dynamic, responsive front-end interfaces. I specialize in the modern web ecosystem, utilizing technologies like React, Node.js, and .NET to deliver end-to-end products.
              </p>
              <p>
                With hands-on experience deploying scalable architecture on the cloud (Azure) and implementing robust CI/CD pipelines, I thrive in Agile environments where problem-solving and clean code intersect to create seamless user experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {/* Feature Box 1 */}
              <div className="glass p-8 rounded-3xl border border-white/5 shadow-lg group hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700">
                  <Layout size={80} className="text-primary" />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 relative z-10">
                  <Layout size={24} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3 relative z-10">Frontend Systems</h4>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                  Building reactive, accessible, and highly interactive user interfaces using modern JavaScript frameworks.
                </p>
              </div>

              {/* Feature Box 2 */}
              <div className="glass p-8 rounded-3xl border border-white/5 shadow-lg group hover:-translate-y-2 transition-transform duration-500 mt-0 md:mt-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700">
                  <Database size={80} className="text-blue-500" />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 relative z-10">
                  <Database size={24} className="text-blue-500" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3 relative z-10">Backend Architecture</h4>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                  Designing scalable database schemas, robust RESTful APIs, and secure microservices for the cloud.
                </p>
              </div>
            </div>

            <div className="pt-6 lg:hidden">
              <a
                href="https://drive.google.com/file/d/11VTSTujtRV8tLFawvhr7tI8C4MjfdMl1/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="cosmic-button w-full"
              >
                Download CV
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
