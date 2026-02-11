export function About() {
  const skills = [
    'Figma',
    'Python',
    'JavaScript',
    'LLM APIs (Claude, OpenAI)',
    'Git/GitHub',
    'RESTful APIs',
    'Automation Frameworks',
    'Prompt Engineering',
    'Cloud Platforms',
    'Financial Management',
    'Reporting Tool',
    '+29 skills'
  ];

  return (
    <section id="about" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="text-sm tracking-widest uppercase text-slate-500 mb-6">
              About
            </div>
            <h2 className="text-4xl lg:text-5xl tracking-tight mb-8">
              Building the future, one commit at a time
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I'm a full stack developer with a passion for creating elegant, 
                scalable solutions. My journey in tech has taken me through various 
                domains, from building robust backend systems to crafting intuitive 
                user interfaces.
              </p>
              <p>
                I believe in the power of open source and actively contribute to 
                the developer community. Every project is an opportunity to learn, 
                grow, and create something meaningful.
              </p>
            </div>
            
            <div>
              <div className="text-sm tracking-widest uppercase text-slate-500 mb-6">
                Core Skills
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="w-1 h-1 bg-black rounded-full" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}