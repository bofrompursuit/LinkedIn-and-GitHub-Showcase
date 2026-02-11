import { ArrowRight, Linkedin, Github, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="text-sm tracking-widest uppercase text-white/50 mb-6">
              Get In Touch
            </div>
            <h2 className="text-4xl lg:text-6xl tracking-tight mb-8 text-white">
              Let's work together
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-xl">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hello, feel free to reach out.
            </p>
          </div>
          
          <div className="space-y-8">
            <a
              href="https://www.linkedin.com/in/bomoldenhauer/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-8 border border-white/10 hover:border-white/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <Linkedin className="w-6 h-6" />
                <div>
                  <div className="text-sm text-white/50 mb-1">LinkedIn</div>
                  <div className="text-lg">Connect Professionally</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            
            <a
              href="https://github.com/bofrompursuit"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-8 border border-white/10 hover:border-white/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <Github className="w-6 h-6" />
                <div>
                  <div className="text-sm text-white/50 mb-1">GitHub</div>
                  <div className="text-lg">View My Repositories</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            
            <a
              href="mailto:boudich@live.com.ph"
              className="group flex items-center justify-between p-8 border border-white/10 hover:border-white/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6" />
                <div>
                  <div className="text-sm text-white/50 mb-1">Email</div>
                  <div className="text-lg">Send a Message</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
        
        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <div>© 2026 Bo Moldenhauer. All rights reserved.</div>
          <div>Built with React & Tailwind CSS</div>
        </div>
      </div>
    </section>
  );
}