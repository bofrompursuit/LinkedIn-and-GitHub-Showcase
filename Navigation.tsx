import { Linkedin, Github } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="text-xl tracking-tight">
            Bo Moldenhauer
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#about" className="text-sm hover:opacity-60 transition-opacity">
              About
            </a>
            <a href="#work" className="text-sm hover:opacity-60 transition-opacity">
              Work
            </a>
            <a href="#contact" className="text-sm hover:opacity-60 transition-opacity">
              Contact
            </a>
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-black/10">
              <a
                href="https://www.linkedin.com/in/bomoldenhauer/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/bofrompursuit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
