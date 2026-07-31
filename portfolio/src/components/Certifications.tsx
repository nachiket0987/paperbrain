import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ShieldCheck, CheckCircle } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const categories = ['All', 'GenAI & ML', 'Data Analytics', 'Big Data'];

  const filteredCerts = categoryFilter === 'All'
    ? PORTFOLIO_DATA.certifications
    : PORTFOLIO_DATA.certifications.filter(c => c.category === categoryFilter);

  return (
    <section className="relative py-24 md:py-32">
      <div className="section-container relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              <span className="h-px w-8 bg-accent/50" />
              Certifications & Industry Simulations
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl">
              Verified <span className="gradient-text">Credentials</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`rounded-full px-4 py-2 font-mono text-xs transition-all duration-300 ${
                  categoryFilter === cat
                    ? 'bg-accent text-background font-bold shadow-[0_0_20px_-3px_var(--glow)]'
                    : 'glass text-muted hover:text-foreground hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCerts.map((cert, idx) => (
            <div
              key={idx}
              className="glass group relative flex flex-col justify-between rounded-3xl p-7 border border-surface-border transition-all duration-300 hover:border-surface-border-strong hover:bg-white/[0.04] hover:-translate-y-1 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="glass rounded-full px-3 py-1 font-mono text-[10px] font-bold text-accent border border-accent/30">
                    {cert.badge}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[11px] text-signal font-semibold">
                    <ShieldCheck className="h-3.5 w-3.5 text-signal" />
                    Verified
                  </span>
                </div>

                <h3 className="font-display font-bold text-foreground text-lg group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>

                <p className="font-mono text-xs text-accent mt-1">
                  {cert.organization}
                </p>

                <div className="mt-4 space-y-1.5 border-t border-surface-border pt-4">
                  {cert.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 font-mono text-xs text-muted">
                      <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-surface-border/50 flex items-center justify-between text-xs font-mono text-muted">
                <span>Issuer: {cert.issuer}</span>
                <span className="text-accent font-semibold flex items-center gap-1">
                  Verified Simulation
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
