import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Cpu, Sparkles, Zap } from 'lucide-react';

export const ArchitectureVisualizer: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('paperbrain');

  const architectureProjects = PORTFOLIO_DATA.projects.filter(p => p.architectureSteps && p.architectureSteps.length > 0);
  const activeProject = architectureProjects.find(p => p.id === selectedProjectId) || architectureProjects[0];

  return (
    <section className="relative py-24 md:py-32 bg-black/60 border-y border-surface-border">
      {/* Background aurora gold glow */}
      <div className="pointer-events-none absolute right-10 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(224,169,94,0.14),transparent_70%)] blur-3xl animate-pulse-glow" aria-hidden="true" />
      
      <div className="section-container relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-8 bg-accent/50" />
            System Architecture Deep Dive
            <span className="h-px w-8 bg-accent/50" />
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl">
            Interactive <span className="gradient-text">Pipeline Architectures</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted mx-auto">
            Explore step-by-step technical blueprints behind Nachiket's flagship AI systems.
          </p>
        </div>

        {/* Project Selector Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {architectureProjects.map((p) => {
            const isActive = p.id === selectedProjectId;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedProjectId(p.id)}
                className={`rounded-full px-5 py-2.5 font-mono text-xs font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-accent text-background font-bold shadow-[0_0_25px_-3px_var(--glow)] scale-105'
                    : 'glass text-muted hover:text-foreground hover:bg-white/10'
                }`}
              >
                <Cpu className="h-4 w-4" />
                <span>{p.title.split('—')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Pipeline Diagram Card */}
        <div className="glass-strong rounded-3xl border border-surface-border-strong p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="bg-dots pointer-events-none absolute inset-0 opacity-20" />
          
          <div className="relative z-10">
            {/* Title Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-surface-border pb-6 mb-8">
              <div>
                <span className="glass rounded-full px-3 py-1 font-mono text-xs font-semibold text-accent border border-accent/30">
                  {activeProject.category}
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground mt-3">
                  {activeProject.title}
                </h3>
                <p className="font-mono text-xs text-muted mt-1">
                  {activeProject.tagline}
                </p>
              </div>

              {activeProject.metrics && (
                <div className="flex flex-wrap gap-3">
                  {activeProject.metrics.map((m, idx) => (
                    <div key={idx} className="glass rounded-xl px-4 py-2 text-center border border-white/10">
                      <p className="font-display font-bold text-accent text-sm">{m.value}</p>
                      <p className="font-mono text-[10px] text-muted">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Pipeline Step Flow Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {activeProject.architectureSteps?.map((stepItem, idx) => (
                <div
                  key={idx}
                  className="glass group relative rounded-2xl p-6 border border-surface-border transition-all duration-300 hover:border-surface-border-strong hover:bg-white/[0.04] hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-accent bg-accent/10 rounded-full px-2.5 py-0.5 border border-accent/30">
                      Step {stepItem.step}
                    </span>
                    <Sparkles className="h-4 w-4 text-accent/40 group-hover:text-accent transition-colors" />
                  </div>

                  <h4 className="font-display font-bold text-foreground text-base mb-2">
                    {stepItem.title}
                  </h4>

                  <p className="text-xs text-muted leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack Chips Banner */}
            <div className="mt-8 pt-6 border-t border-surface-border flex items-center justify-between flex-wrap gap-4">
              <span className="font-mono text-xs text-muted flex items-center gap-2">
                <Zap className="h-4 w-4 text-accent" />
                Pipeline Tech Stack:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-accent/10 border border-accent/30 px-3 py-1 font-mono text-xs font-semibold text-accent-strong"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
