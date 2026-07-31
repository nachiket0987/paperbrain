import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Sparkles, ArrowUpRight } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'RAG & Agents', 'Computer Vision', 'NLP & Deep Learning', 'Analytics'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedCategory);

  return (
    <section id="work" className="relative py-28 md:py-36 bg-black/40">
      <div className="section-container relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              <span className="h-px w-8 bg-accent/50" />
              Featured Work
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Stuff I've <span className="gradient-text">Built</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 font-mono text-xs transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-accent text-background font-bold shadow-[0_0_20px_-3px_var(--glow)]'
                    : 'glass text-muted hover:text-foreground hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-strong group relative flex flex-col justify-between rounded-3xl border border-surface-border p-8 transition-all duration-500 hover:border-surface-border-strong hover:bg-white/[0.05] hover:-translate-y-1.5 shadow-2xl"
            >
              {/* Top Meta Header */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="glass rounded-full px-3 py-1 font-mono text-[11px] font-semibold text-accent border border-accent/20">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-signal font-bold">
                      <Sparkles className="h-3 w-3 text-signal" />
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="mt-2 font-mono text-xs text-accent/80 font-medium">
                  {project.tagline}
                </p>

                <p className="mt-4 text-muted text-sm leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Highlights Bullet List */}
                <div className="mt-5 space-y-2 border-t border-surface-border pt-4">
                  {project.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-muted-strong font-mono">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Tags & Action Link */}
              <div className="mt-8 pt-4 border-t border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                <div className="flex flex-wrap gap-1.5 max-w-[75%]">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-md bg-white/[0.03] border border-white/5 px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-foreground transition-all duration-300 hover:bg-accent hover:text-background hover:border-accent"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>Code</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
