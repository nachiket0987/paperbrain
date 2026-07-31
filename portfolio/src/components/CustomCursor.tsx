import React, { useEffect, useState } from 'react';

export const CustomCursorAndEffects: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Mouse move listener for smooth cursor & radial background spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable / interactive elements
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('[data-cursor="link"]') ||
          target.closest('input') ||
          target.closest('textarea'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth trailing spring effect for cursor outer ring
  useEffect(() => {
    let animationFrameId: number;

    const animateTrail = () => {
      setTrailPos((prev) => {
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      animationFrameId = requestAnimationFrame(animateTrail);
    };

    animationFrameId = requestAnimationFrame(animateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos]);

  return (
    <>
      {/* 1. Top Fixed Scroll Progress Indicator Beam */}
      <div
        className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-accent via-accent-strong to-signal transition-transform duration-100 ease-out pointer-events-none"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {/* 2. Interactive Background Mouse Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(224, 169, 94, 0.08), transparent 60%)`,
        }}
      />

      {/* 3. Floating Ambient Particle Dots */}
      <div className="pointer-events-none fixed inset-0 -z-[1] overflow-hidden" aria-hidden="true">
        {/* Particle 1 */}
        <span
          className="absolute h-1.5 w-1.5 rounded-full bg-accent/40 animate-float"
          style={{ left: '12%', top: '22%', animationDuration: '5s' }}
        />
        {/* Particle 2 */}
        <span
          className="absolute h-1.5 w-1.5 rounded-full bg-signal/40 animate-float"
          style={{ left: '28%', top: '68%', animationDuration: '6.4s', animationDelay: '0.4s' }}
        />
        {/* Particle 3 */}
        <span
          className="absolute h-1 w-1 rounded-full bg-accent/40 animate-float"
          style={{ left: '44%', top: '14%', animationDuration: '5.6s', animationDelay: '0.8s' }}
        />
        {/* Particle 4 */}
        <span
          className="absolute h-1.5 w-1.5 rounded-full bg-signal/40 animate-float"
          style={{ left: '61%', top: '74%', animationDuration: '7s', animationDelay: '1.2s' }}
        />
        {/* Particle 5 */}
        <span
          className="absolute h-1 w-1 rounded-full bg-accent/40 animate-float"
          style={{ left: '76%', top: '30%', animationDuration: '6s', animationDelay: '1.6s' }}
        />
        {/* Particle 6 */}
        <span
          className="absolute h-1.5 w-1.5 rounded-full bg-signal/40 animate-float"
          style={{ left: '88%', top: '60%', animationDuration: '5.2s', animationDelay: '2s' }}
        />
      </div>

      {/* 4. Custom Follower Cursor (Center Dot & Outer Ring) */}
      <div className="pointer-events-none hidden md:block">
        {/* Inner Solid Pointer Dot */}
        <div
          className={`fixed top-0 left-0 z-[999] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent transition-transform duration-100 ease-out ${
            isClicking ? 'scale-75' : isHovered ? 'scale-150 bg-signal' : 'scale-100'
          }`}
          style={{
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
          }}
        />

        {/* Outer Spring Ring & Glow */}
        <div
          className={`fixed top-0 left-0 z-[998] rounded-full border border-accent/60 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
            isHovered
              ? 'h-12 w-12 border-signal/80 bg-signal/10 shadow-[0_0_20px_rgba(127,199,196,0.3)] scale-110'
              : 'h-8 w-8 border-accent/40 bg-accent/5 shadow-[0_0_15px_rgba(224,169,94,0.15)] scale-100'
          } ${isClicking ? 'scale-90' : ''}`}
          style={{
            transform: `translate3d(${trailPos.x}px, ${trailPos.y}px, 0)`,
          }}
        />
      </div>
    </>
  );
};
