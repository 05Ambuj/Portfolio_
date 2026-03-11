import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-500",
        isScrolled ? "py-3 top-0 md:py-4 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-sm" : "py-6 top-0"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-2xl font-bold flex items-center gap-1 group"
          href="#hero"
        >
          <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
            <span className="text-glow text-primary font-black">Ambuj</span>
            <span className="text-foreground tracking-tight">folio</span>
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8 items-center glass px-8 py-3 rounded-full">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 hover:bg-primary/10 rounded-full transition-colors"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        {/* mobile nav overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center",
            "transition-all duration-500 ease-in-out md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-2xl font-medium w-full px-8 text-center mt-12">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary py-4 border-b border-white/5 transition-all duration-300 active:scale-95"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${key * 100}ms` }}
              >
                <span className={isMenuOpen ? "animate-fade-in-up inline-block" : ""}>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
