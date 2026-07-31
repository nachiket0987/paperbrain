import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="journey" className="relative py-28 md:py-36">
      <div className="section-container relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 md:mb-20 text-left">
          <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-8 bg-accent/50" />
            Journey
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Engineering & <span className="gradient-text">Academic Timeline</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base text-muted md:text-lg">
            My experience building production AI, research internships, and academic evolution.
          </p>
        </div>

        {/* Timeline Entries List */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.experiences.map((exp, index) => {
            const numIndex = `0${index + 1}`;
            return (
              <div
                key={exp.id}
                className="glass group rounded-3xl p-8 border border-surface-border transition-all duration-300 hover:border-surface-border-strong hover:bg-white/[0.04]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[100px_1fr] gap-6 items-start">
                  
                  {/* Number Badge */}
                  <div className="font-display text-5xl font-extrabold text-accent/30 group-hover:text-accent transition-colors duration-300 select-none">
                    {numIndex}
                  </div>

                  {/* Details Content */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-surface-border pb-4">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
                          {exp.role}
                        </h3>
                        <p className="font-mono text-sm text-accent mt-1">
                          {exp.organization}
                        </p>
                      </div>

                      <div className="flex flex-col sm:items-end font-mono text-xs text-muted gap-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-accent" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1 text-muted/70">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted text-base leading-relaxed">
                      {exp.summary}
                    </p>

                    <ul className="space-y-2 pt-2">
                      {exp.bulletPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-sm text-muted-strong leading-relaxed">
                          <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 pt-3">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="rounded-full border border-surface-border bg-white/[0.02] px-3 py-1 font-mono text-xs font-medium text-muted hover:border-accent/30 hover:text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
