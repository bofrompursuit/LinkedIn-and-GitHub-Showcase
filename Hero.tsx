import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="pt-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl tracking-tight">
                Developer.<br />
                Builder.<br />
                Problem Solver.
              </h1>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                I put Bo in colla-BO-ration. Client Finance Operations Manager | AI Software Developer with a demonstrated history of working in AI, AdTech, Marketing, FinTech, Banking, eCommerce, Hospitality, BPO & Telecoms.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white hover:bg-black/80 transition-colors"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/bomoldenhauer/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-black/20 hover:border-black/40 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-sm overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1597219286919-07229a08d9bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80"
                alt="Professional developer workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-slate-100 -z-10 rounded-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}