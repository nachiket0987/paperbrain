import React, { useState, useEffect } from 'react';
import { Sparkles, FileText, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const Hero: React.FC = () => {
  const titles = [
    "AI & ML Engineer",
    "Multi-Agent & RAG Architect",
    "Computer Vision Specialist",
    "Full-Stack AI Programmer"
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Background Aurora Radial Glow Effects */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(224,169,94,0.14),transparent_65%)] blur-3xl animate-pulse-glow" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-40 left-[8%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(127,199,196,0.1),transparent_65%)] blur-3xl animate-aurora" aria-hidden="true" />

      {/* Grid pattern overlay */}
      <div className="bg-grid absolute inset-0 opacity-40 mask-fade-y pointer-events-none" />

      <div className="section-container relative z-10 w-full max-w-6xl px-6 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          
          {/* Left Column Text Content */}
          <div className="text-center lg:text-left">
            {/* Pulsing Status Beacon */}
            <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-muted-strong border border-surface-border">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
              </span>
              <span className="font-mono uppercase tracking-wider text-[11px] text-foreground">
                Available for AI & ML roles
              </span>
            </div>

            {/* Main Name Heading */}
            <h1 className="font-display text-4xl font-bold leading-[1.0] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Nachiket <br />
              <span className="gradient-text">Gadilohar</span>
            </h1>

            {/* Dynamic Role Subtitle */}
            <div className="mt-5 flex items-baseline justify-center gap-3 font-display text-xl font-semibold sm:text-2xl md:text-3xl lg:justify-start">
              <span className="text-muted">I'm an</span>
              <span className="relative inline-block font-bold text-accent min-w-[280px]">
                <span className="gradient-text transition-all duration-500 ease-in-out block">
                  {titles[currentTitleIndex]}
                </span>
              </span>
            </div>

            {/* Bio Paragraph */}
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg lg:mx-0">
              Building <span className="text-foreground font-medium">Multi-Agent RAG systems</span>,{' '}
              <span className="text-foreground font-medium">Computer Vision pipelines</span>, and{' '}
              <span className="text-foreground font-medium">Document Intelligence automation</span> that turn frontier models into high-impact production solutions.
            </p>

            {/* Call to Action Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#work"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:bg-accent-strong hover:shadow-[0_0_35px_-4px_var(--glow)] hover:-translate-y-0.5"
              >
                <Sparkles className="h-4 w-4 text-background" />
                <span>View My Work</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full glass px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-surface-border-strong hover:bg-white/10 hover:-translate-y-0.5"
              >
                <FileText className="h-4 w-4 text-accent" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
              <a
                href={PORTFOLIO_DATA.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:text-accent hover:border-accent/40"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={PORTFOLIO_DATA.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:text-accent hover:border-accent/40"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
                aria-label="Email"
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:text-accent hover:border-accent/40"
              >
                <Mail className="h-5 w-5" />
              </a>
              <span className="font-mono text-xs text-muted/80 border-l border-surface-border pl-4">
                Pune, India
              </span>
            </div>
          </div>

          {/* Right Column Profile Showcase Card */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative">
              {/* Aurora backdrop glow behind card */}
              <div className="absolute inset-0 -z-10 scale-95 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_30%,rgba(224,169,94,0.3),transparent_70%)] blur-2xl animate-pulse-glow" />

              {/* Profile Image Glass Container */}
              <div className="glass-strong relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-surface-border-strong p-3 shadow-2xl">
                <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                  <img
                    src="/profile.jpg"
                    alt={PORTFOLIO_DATA.personalInfo.name}
                    className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                  
                  {/* Overlay Name Tag */}
                  <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-3 border border-white/10">
                    <p className="font-display font-bold text-foreground text-sm">
                      {PORTFOLIO_DATA.personalInfo.name}
                    </p>
                    <p className="font-mono text-[11px] text-accent">
                      {PORTFOLIO_DATA.personalInfo.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Tech Pill Badges */}
              <div className="glass-strong absolute z-20 rounded-full px-3.5 py-1.5 font-mono text-xs font-semibold text-accent-strong shadow-xl border border-accent/30 -left-6 top-8 animate-float">
                RAG Systems
              </div>
              <div className="glass-strong absolute z-20 rounded-full px-3.5 py-1.5 font-mono text-xs font-semibold text-signal shadow-xl border border-signal/30 -right-6 top-20 animate-float" style={{ animationDelay: '1.5s' }}>
                YOLOv5 Vision
              </div>
              <div className="glass-strong absolute z-20 rounded-full px-3.5 py-1.5 font-mono text-xs font-semibold text-accent-strong shadow-xl border border-accent/30 -left-4 bottom-24 animate-float" style={{ animationDelay: '3s' }}>
                Multi-Agent LLMs
              </div>
              <div className="glass-strong absolute z-20 rounded-full px-3.5 py-1.5 font-mono text-xs font-semibold text-signal shadow-xl border border-signal/30 -right-4 bottom-12 animate-float" style={{ animationDelay: '4.5s' }}>
                FastAPI & MLOps
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
