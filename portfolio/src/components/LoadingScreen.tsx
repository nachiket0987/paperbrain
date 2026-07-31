import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const LoadingScreen: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1800; // 1.8s smooth loading animation

    const updateProgress = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const currentProgress = Math.min(Math.floor((elapsedTime / duration) * 100), 100);
      
      setProgress(currentProgress);

      if (currentProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setIsDone(true);
          if (onComplete) onComplete();
        }, 300);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ease-in-out ${
        progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Mesh Grid Backdrop */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />

      {/* Aurora Radial Glow */}
      <div className="pointer-events-none absolute h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(224,169,94,0.18),transparent_65%)] blur-3xl animate-pulse-glow" />

      {/* Center Monogram Logo */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="overflow-hidden">
          <div className="font-display text-7xl font-extrabold tracking-tight md:text-9xl animate-float">
            <span className="gradient-text">{PORTFOLIO_DATA.personalInfo.monogram}</span>
            <span className="text-accent">.</span>
          </div>
        </div>

        <p className="mt-4 font-mono text-xs uppercase tracking-[0.4em] text-muted font-semibold">
          AI & ML Engineer
        </p>

        {/* Loading Progress Bar & Percentage */}
        <div className="mt-12 w-64">
          <div className="mb-3 flex items-center justify-between font-mono text-xs text-muted">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
              Initializing AI Engine...
            </span>
            <span className="tabular-nums font-bold text-accent">{progress}%</span>
          </div>

          {/* Progress Bar Track */}
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10 p-0.5 border border-white/10">
            <div
              className="h-full rounded-full transition-all duration-150 ease-out"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #B37B2E 0%, #E0A95E 60%, #F3C583 100%)',
                boxShadow: '0 0 15px rgba(224, 169, 94, 0.8)',
              }}
            />
          </div>
        </div>

      </div>

      {/* Bottom Tag */}
      <p className="absolute bottom-10 font-mono text-[11px] text-muted/60 tracking-wider">
        Multi-Agent RAG · Computer Vision · Document Intelligence
      </p>
    </div>
  );
};
