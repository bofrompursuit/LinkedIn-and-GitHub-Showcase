import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Scribe',
      category: 'AI Application',
      description: 'An intelligent transcription and documentation tool leveraging AI to streamline content creation and note-taking workflows.',
      image: 'https://images.unsplash.com/photo-1762279389045-110301edeecc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
      tags: ['AI', 'JavaScript', 'LLM APIs'],
      link: 'https://bofrompursuit.github.io/scribe/'
    },
    {
      id: 2,
      title: 'Ad2',
      category: 'AdTech Platform',
      description: 'Advanced advertising technology solution designed to optimize campaign performance and streamline ad operations.',
      image: 'https://images.unsplash.com/photo-1760037028517-e5cc6e3ebd3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
      tags: ['AdTech', 'Analytics', 'Automation'],
      link: 'https://bofrompursuit.github.io/ad2/'
    },
    {
      id: 3,
      title: 'Closer Data Analytics',
      category: 'Data Analytics',
      description: 'Comprehensive data analytics platform providing actionable insights through advanced visualization and reporting capabilities.',
      image: 'https://images.unsplash.com/photo-1762279389002-7b6abd7bd6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
      tags: ['Analytics', 'Data Visualization', 'Reporting'],
      link: 'https://bofrompursuit.github.io/closer-data-analytics/'
    },
    {
      id: 4,
      title: 'Soar',
      category: 'Business Platform',
      description: 'Business growth platform designed to elevate performance metrics and drive strategic decision-making.',
      image: 'https://images.unsplash.com/photo-1704266566659-cd303fe59b9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
      tags: ['Business', 'Analytics', 'Growth'],
      link: 'https://bofrompursuit.github.io/Soar/'
    }
  ];

  return (
    <section id="work" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <div className="text-sm tracking-widest uppercase text-slate-500 mb-6">
            Selected Work
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-4xl lg:text-5xl tracking-tight max-w-2xl">
              Projects that showcase my passion for development
            </h2>
            <a
              href="https://github.com/bofrompursuit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:opacity-60 transition-opacity"
            >
              View All on GitHub
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-20">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100 mb-6">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest uppercase text-slate-500">
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                
                <h3 className="text-2xl tracking-tight group-hover:opacity-60 transition-opacity">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 border border-black/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}