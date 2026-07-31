import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="section-container relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 md:mb-20 text-left">
          <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-8 bg-accent/50" />
            About
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl max-w-3xl">
            Turning frontier models into <span className="gradient-text">production products</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base text-muted md:text-lg leading-relaxed">
            {PORTFOLIO_DATA.personalInfo.bio}
          </p>
        </div>

        {/* Physics to Data Science Transition Story Card */}
        <div className="glass-strong mb-16 rounded-3xl border border-surface-border-strong p-8 md:p-10 relative overflow-hidden">
          <div className="bg-dots pointer-events-none absolute inset-0 opacity-20" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_2fr] items-center">
            
            <div className="flex flex-col gap-4 border-b border-surface-border lg:border-b-0 lg:border-r lg:pr-8 pb-6 lg:pb-0">
              <div className="flex items-center gap-3 text-accent font-mono text-xs uppercase tracking-wider">
                <GraduationCap className="h-5 w-5 text-accent" />
                <span>The Academic Pivot</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                From B.Sc Physics to M.Sc Data Science & AI
              </h3>
              <p className="font-mono text-xs text-muted">
                Fergusson College → Symbiosis Institute
              </p>
            </div>

            <div>
              <p className="text-muted text-base leading-relaxed">
                {PORTFOLIO_DATA.personalInfo.transitionStory}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Engineering Principles */}
        <div className="grid gap-6 md:grid-cols-3">
          {PORTFOLIO_DATA.pillars.map((pillar) => (
            <div
              key={pillar.index}
              className="glass group rounded-3xl p-8 transition-all duration-300 hover:border-surface-border-strong hover:bg-white/[0.04] hover:-translate-y-1"
            >
              <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                {pillar.tag}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Grid Banner */}
        <div className="mt-16">
          <div className="glass-strong relative overflow-hidden rounded-3xl border border-surface-border p-8 md:p-12">
            <div className="bg-dots pointer-events-none absolute inset-0 opacity-30" />
            <div className="relative z-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 text-center">
              {PORTFOLIO_DATA.impactMetrics.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <p className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                    <span className="tabular-nums gradient-text">{stat.value}</span>
                  </p>
                  <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                    {stat.label}
                  </p>
                  <p className="mt-1 font-mono text-[10px] text-muted max-w-[140px]">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
