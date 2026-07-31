import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ${
          scrolled
            ? 'glass-strong border-surface-border-strong shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Brand Monogram */}
        <a
          href="#"
          className="font-display text-xl font-bold tracking-tight text-foreground transition-colors hover:text-accent flex items-center gap-1"
        >
          {PORTFOLIO_DATA.personalInfo.monogram}
          <span className="text-accent text-2xl leading-none">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative rounded-full px-4 py-2 font-sans text-sm font-medium text-muted transition-colors duration-300 hover:text-foreground hover:bg-white/5"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-background transition-all duration-300 hover:bg-accent-strong hover:shadow-[0_0_25px_-2px_var(--glow)]"
          >
            <span className="relative z-10">Get in Touch</span>
            <ArrowUpRight className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-full p-2 text-foreground hover:bg-white/10 md:hidden"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-40 rounded-3xl glass-strong border border-surface-border p-6 shadow-2xl md:hidden animate-fade-in">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-lg font-medium text-foreground hover:text-accent"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-accent py-3 text-center font-semibold text-background"
              >
                Get in Touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
