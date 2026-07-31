import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Send, ExternalLink, Loader2 } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    const textToCopy = PORTFOLIO_DATA.personalInfo.email;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(textToCopy);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleGmailOpen = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PORTFOLIO_DATA.personalInfo.email)}&su=Portfolio Inquiry&body=Hi Nachiket,\n\n`;
    window.open(gmailUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    
    setIsSending(true);

    try {
      // Send directly via Web3Forms API to send to nachiketlohar0306@gmail.com
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'b94236a2-632b-4560-bfa6-848f328a6f3b', // Free Web3Forms endpoint for direct email delivery
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Message from ${formData.name}`,
          to_email: PORTFOLIO_DATA.personalInfo.email
        })
      });

      setIsSending(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch {
      // Fallback mailto trigger if network fails
      setIsSending(false);
      const mailtoUrl = `mailto:${PORTFOLIO_DATA.personalInfo.email}?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nReply to: ' + formData.email)}`;
      window.location.href = mailtoUrl;
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="section-container relative z-10 max-w-6xl mx-auto px-6">
        
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          
          {/* Left Column Text & Direct Contact Details */}
          <div>
            <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              <span className="h-px w-8 bg-accent/50" />
              Contact
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Let's work <span className="gradient-text">together</span>
            </h2>
            <p className="mt-5 text-base text-muted md:text-lg leading-relaxed">
              Whether you have a project in mind, an AI automation pipeline to build, or want to discuss multi-agent RAG systems, feel free to reach out directly to my email or via the message box.
            </p>

            <div className="mt-10 space-y-6">
              
              {/* Copy Email & Open Gmail Card */}
              <div className="glass group rounded-2xl p-5 border border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted">Direct Email</p>
                    <p className="font-display font-bold text-foreground text-sm sm:text-base">
                      {PORTFOLIO_DATA.personalInfo.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 rounded-full bg-white/5 hover:bg-accent hover:text-background px-3.5 py-2 text-xs font-semibold text-foreground transition-all duration-300"
                  >
                    {copied ? <Check className="h-4 w-4 text-signal" /> : <Copy className="h-4 w-4" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleGmailOpen}
                    className="flex items-center gap-1 rounded-full bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-background px-3.5 py-2 text-xs font-semibold transition-all duration-300"
                  >
                    <span>Gmail</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="glass rounded-2xl p-5 border border-surface-border flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-signal/15 text-signal shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted">Phone Number</p>
                  <p className="font-display font-bold text-foreground text-sm sm:text-base">
                    {PORTFOLIO_DATA.personalInfo.phone}
                  </p>
                </div>
              </div>

              {/* Location Card */}
              <div className="glass rounded-2xl p-5 border border-surface-border flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted">Location</p>
                  <p className="font-display font-bold text-foreground text-sm sm:text-base">
                    {PORTFOLIO_DATA.personalInfo.location}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column Direct Inbox Delivery Form */}
          <div className="glass-strong rounded-3xl border border-surface-border-strong p-8 shadow-2xl relative overflow-hidden">
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Send a Message
                </h3>
                <span className="font-mono text-[11px] text-accent flex items-center gap-1">
                  ● Sent to Nachiket's Inbox
                </span>
              </div>

              <div>
                <label className="block font-mono text-xs text-muted mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Smith"
                  required
                  className="w-full rounded-2xl bg-white/[0.03] border border-surface-border px-4 py-3.5 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-muted mb-2">Your Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  required
                  className="w-full rounded-2xl bg-white/[0.03] border border-surface-border px-4 py-3.5 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-muted mb-2">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or role..."
                  required
                  className="w-full rounded-2xl bg-white/[0.03] border border-surface-border px-4 py-3.5 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-accent py-4 text-sm font-bold text-background transition-all duration-300 hover:bg-accent-strong hover:shadow-[0_0_30px_-4px_var(--glow)] disabled:opacity-50"
              >
                {isSending ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Sending to Inbox...</span>
                  </>
                ) : submitted ? (
                  <>
                    <Check className="h-5 w-5 text-background" />
                    <span>Message Delivered to Nachiket's Inbox!</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message to Nachiket</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-surface-border py-12 bg-black/60">
      <div className="section-container max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a href="#" className="font-display text-2xl font-bold tracking-tight text-foreground flex items-center gap-1">
              {PORTFOLIO_DATA.personalInfo.monogram}
              <span className="text-accent text-3xl leading-none">.</span>
            </a>
            <p className="mt-2 max-w-xs text-xs text-muted font-mono">
              AI Engineer building multi-agent RAG systems, document intelligence, and vision pipelines.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
              aria-label="Email"
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-surface-border pt-6 md:flex-row">
          <p className="text-xs text-muted">
            © 2026 {PORTFOLIO_DATA.personalInfo.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted/70">
            Crafted with React · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};
