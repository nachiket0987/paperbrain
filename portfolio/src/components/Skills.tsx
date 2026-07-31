import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Brain, Database, Server, Code, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(PORTFOLIO_DATA.skillsCategories[0].id);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="h-5 w-5" />;
      case 'Database': return <Database className="h-5 w-5" />;
      case 'Server': return <Server className="h-5 w-5" />;
      case 'Code': return <Code className="h-5 w-5" />;
      default: return <Brain className="h-5 w-5" />;
    }
  };

  const selectedCategoryObj = PORTFOLIO_DATA.skillsCategories.find(c => c.id === activeCategory) || PORTFOLIO_DATA.skillsCategories[0];

  return (
    <section id="skills" className="relative py-28 md:py-36 bg-black/40">
      <div className="section-container relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 md:mb-20 text-center">
          <div className="inline-flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-8 bg-accent/50" />
            Toolkit & Proficiency
            <span className="h-px w-8 bg-accent/50" />
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl mx-auto">
            The stack behind the <span className="gradient-text">systems</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base text-muted md:text-lg mx-auto">
            Production frameworks, databases, and deep learning architectures I reach for when building scalable AI.
          </p>
        </div>

        {/* Category Tabs & Interactive Skills Display Grid */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 items-start">
          
          {/* Left Category Selection Buttons */}
          <div className="flex flex-col gap-3">
            {PORTFOLIO_DATA.skillsCategories.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group relative flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                    isActive
                      ? 'glass-strong border-surface-border-strong text-foreground shadow-lg scale-[1.02]'
                      : 'border-surface-border bg-white/[0.01] text-muted hover:border-surface-border hover:bg-white/[0.03]'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 -z-10 rounded-2xl bg-accent/[0.06]" />
                  )}
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isActive
                        ? 'bg-accent/20 text-accent-strong'
                        : 'bg-white/5 text-muted group-hover:text-foreground'
                    }`}
                  >
                    {getCategoryIcon(cat.icon)}
                  </span>
                  <div>
                    <span className={`block font-display font-semibold text-base transition-colors ${isActive ? 'text-foreground' : 'text-muted-strong'}`}>
                      {cat.title}
                    </span>
                    <span className="font-mono text-xs text-muted">
                      {cat.count}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Skills Grid with Visible Percentage Bars */}
          <div className="glass-strong relative min-h-[24rem] rounded-3xl border border-surface-border-strong p-8 shadow-2xl">
            <div className="bg-grid pointer-events-none absolute inset-0 rounded-3xl opacity-30" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between border-b border-surface-border pb-4 mb-6">
                <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-accent" />
                  {selectedCategoryObj.title}
                </h3>
                <span className="font-mono text-xs text-accent font-semibold">
                  Production Level Ratings
                </span>
              </div>

              <div className="space-y-5">
                {selectedCategoryObj.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-foreground font-semibold flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                        {skill.name}
                      </span>
                      <span className="text-accent font-bold px-2 py-0.5 rounded-full bg-accent/10 border border-accent/30">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden p-0.5 border border-white/15 shadow-inner">
                      {/* Animated Glowing Fill Bar */}
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          background: 'linear-gradient(90deg, #B37B2E 0%, #E0A95E 60%, #F3C583 100%)',
                          boxShadow: '0 0 12px rgba(224, 169, 94, 0.7)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* Dual Infinite Marquee Ticker */}
        <div className="mt-20 flex flex-col gap-5 mask-fade-edges overflow-hidden py-4">
          
          {/* Marquee Row 1 */}
          <div className="flex w-full overflow-hidden">
            <div className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap">
              {PORTFOLIO_DATA.marqueeSkills.concat(PORTFOLIO_DATA.marqueeSkills).map((item, idx) => (
                <span key={idx} className="font-display text-2xl font-semibold text-muted/60 transition-colors hover:text-accent md:text-3xl flex items-center gap-8">
                  {item}
                  <span className="text-accent/40 font-mono text-sm">✦</span>
                </span>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 */}
          <div className="flex w-full overflow-hidden opacity-70">
            <div className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap" style={{ animationDirection: 'reverse', animationDuration: '42s' }}>
              {PORTFOLIO_DATA.marqueeSkills.concat(PORTFOLIO_DATA.marqueeSkills).reverse().map((item, idx) => (
                <span key={idx} className="font-display text-xl font-semibold text-muted/40 transition-colors hover:text-signal md:text-2xl flex items-center gap-8">
                  {item}
                  <span className="text-signal/40 font-mono text-sm">✦</span>
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
