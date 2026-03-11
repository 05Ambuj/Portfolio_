import { ArrowRight, Code2, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 overflow-hidden pt-20 lg:pt-0"
    >
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[80vw] lg:w-[50vw] h-[100vh] bg-gradient-to-bl from-primary/20 via-primary/5 to-transparent -z-10 dark:from-primary/10 dark:via-background dark:to-background pointer-events-none"></div>
      <div className="absolute -left-40 bottom-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="space-y-8 lg:pr-12 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <Sparkles size={16} />
              <span>Full Stack Development</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1]">
              <span className="opacity-0 animate-fade-in-up block text-foreground pb-2" style={{ animationDelay: "200ms" }}>
                Crafting
              </span>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-500 to-primary/80 opacity-0 animate-fade-in-up block pb-2" style={{ animationDelay: "300ms" }}>
                Digital
              </span>
              <span className="opacity-0 animate-fade-in-up block text-foreground" style={{ animationDelay: "400ms" }}>
                Experiences.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-in-up leading-relaxed font-light" style={{ animationDelay: "500ms" }}>
              I'm <strong className="font-semibold text-foreground">Ambuj</strong>, a Software Engineer dedicated to turning complex problems into elegant, highly performant web applications.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-up flex flex-wrap items-center gap-4" style={{ animationDelay: "600ms" }}>
              <a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95">
                Explore Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="px-8 py-4 rounded-full border border-border bg-background/50 hover:bg-accent hover:text-accent-foreground font-medium transition-all duration-300 backdrop-blur-sm">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Visual/Abstract Column */}
          <div className="relative hidden lg:block opacity-0 animate-fade-in" style={{ animationDelay: "800ms" }}>
             <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Decorative floating elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-blue-400/30 rounded-full blur-3xl opacity-50 animate-pulse-subtle"></div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-primary/20 rounded-[40px] rotate-3 animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] border border-primary/40 rounded-[30px] -rotate-6 animate-[spin_15s_linear_infinite_reverse]"></div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass w-32 h-32 rounded-2xl flex items-center justify-center shadow-2xl z-20 group hover:scale-110 transition-transform duration-500 hover:-rotate-12 cursor-pointer border-white/10">
                  <Code2 size={48} className="text-primary group-hover:text-blue-400 transition-colors" />
                </div>
                
                {/* Floating "skills" badges near graphic */}
                <div className="absolute top-1/4 right-10 glass px-4 py-2 rounded-full text-sm font-medium z-30 animate-float border-white/10 shadow-xl" style={{ animationDelay: "0ms" }}>React.js</div>
                <div className="absolute top-1/4 left-10 glass px-4 py-2 rounded-full text-sm font-medium z-30 animate-float border-white/10 shadow-xl" style={{ animationDelay: "1000ms" }}>ASP.NET</div>
                <div className="absolute bottom-1/4 left-10 glass px-4 py-2 rounded-full text-sm font-medium z-30 animate-float border-white/10 shadow-xl" style={{ animationDelay: "2000ms" }}>Node.js</div>
                <div className="absolute bottom-1/4 right-10 glass px-4 py-2 rounded-full text-sm font-medium z-30 animate-float border-white/10 shadow-xl" style={{ animationDelay: "3000ms" }}>Azure</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
