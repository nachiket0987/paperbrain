import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface Message {
  sender: 'ai' | 'user';
  text: string;
}

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: `Hi! I'm Nachiket's AI Portfolio Assistant. Ask me anything about his 7-agent PaperBrain RAG pipeline, YOLOv5 SignLens, AutoCAD automation, or his pivot from B.Sc Physics to M.Sc Data Science!`,
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sampleQuestions = [
    "What is PaperBrain & how does the 7-agent RAG work?",
    "Why did Nachiket switch from Physics to Data Science?",
    "What were his key achievements at Trans Tech?",
    "What is Nachiket's core tech stack?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();
    
    if (q.includes('paperbrain') || q.includes('rag') || q.includes('agent')) {
      return `PaperBrain is Nachiket's flagship AI project — a production-grade 7-Agent RAG PDF Intelligence system. It uses 7 multi-agent processing stages (Extract, Analyze, Preprocess, Optimize, Synthesize, Validate, Assemble) with FAISS vector search, real-time SSE token streaming, and automated multi-provider LLM failover. Check out the code at ${PORTFOLIO_DATA.personalInfo.github}/paperbrain!`;
    }

    if (q.includes('physics') || q.includes('switch') || q.includes('education') || q.includes('fergusson') || q.includes('symbiosis') || q.includes('motive')) {
      return `Nachiket graduated with a B.Sc in Physics from Fergusson College, Pune (74%) where he developed deep mathematical modeling skills. Driven by the goal of applying physics-level mathematical rigor to intelligent software, he transitioned into an M.Sc in Data Science / Computer Applications at Symbiosis Institute of Geoinformatics, Pune. This combination allows him to bring rigorous scientific problem-solving to AI engineering!`;
    }

    if (q.includes('trans tech') || q.includes('achievement') || q.includes('autocad') || q.includes('work') || q.includes('job') || q.includes('experience')) {
      return `At Trans Tech Projects Pvt. Ltd. (Software Programmer AI Focused), Nachiket achieved:
1. Engineered an AI-driven AutoCAD automation pipeline using Python & Computer Vision, reducing design turnaround time by 81% (from ~370 to ~70 hours) with >90% accuracy.
2. Built a PDF-to-XML document intelligence system (FastAPI + OCR) achieving 95% extraction accuracy.
3. Mentored 2 junior team members in AI documentation standards.`;
    }

    if (q.includes('stack') || q.includes('skills') || q.includes('tool') || q.includes('python') || q.includes('tech')) {
      return `Nachiket specializes in:
• AI & ML: Multi-Agent RAG Systems, Prompt Engineering, FAISS Vector Search, PyTorch, YOLOv5, LSTM Deep Learning.
• Backend & Cloud: Python, FastAPI, Flask, REST APIs, SSE Token Streaming, Docker, CircleCI CI/CD, AWS EC2, Azure, GCP.
• Vision & Data: OpenCV, Tesseract OCR, PostgreSQL, Text-to-SQL, PowerBI.`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach') || q.includes('phone')) {
      return `You can reach Nachiket directly at ${PORTFOLIO_DATA.personalInfo.email} or on LinkedIn at linkedin.com/in/nachiketlohar. Phone: ${PORTFOLIO_DATA.personalInfo.phone}. He is currently based in Pune, India and available for AI/ML engineering roles!`;
    }

    return `Nachiket Gadilohar is an AI Engineer with 2+ years of experience specializing in Multi-Agent RAG systems, Computer Vision pipelines, and Document Intelligence automation. Feel free to explore his featured work above or contact him at ${PORTFOLIO_DATA.personalInfo.email}!`;
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: Message = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiReply = generateAnswer(text);
      setMessages((prev) => [...prev, { sender: 'ai', text: aiReply }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open portfolio AI chat"
        className="fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-accent text-background shadow-[0_8px_32px_-4px_var(--glow)] transition-all duration-300 hover:-translate-y-1 hover:bg-accent-strong hover:shadow-[0_12px_40px_-4px_var(--glow)]"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[95] flex h-[520px] w-[360px] sm:w-[420px] flex-col rounded-3xl glass-strong border border-surface-border-strong shadow-2xl overflow-hidden animate-fade-in">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-surface-border bg-white/[0.03] px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-accent font-bold">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground text-sm flex items-center gap-1.5">
                  Nachiket AI Assistant
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                </h4>
                <p className="font-mono text-[10px] text-signal">
                  ● Trained on Resume & GitHub
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <Bot className="h-4 w-4" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-accent text-background font-medium rounded-br-none'
                      : 'glass border border-surface-border text-foreground rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                {msg.sender === 'user' && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-foreground">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-accent font-mono text-xs pl-2">
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span>Nachiket AI is thinking...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Sample Prompts */}
          <div className="px-4 py-2 border-t border-surface-border/50 flex flex-wrap gap-1.5 bg-black/20">
            {sampleQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="rounded-full bg-white/[0.04] border border-white/10 px-2.5 py-1 text-[10px] font-mono text-muted hover:text-accent hover:border-accent/30 transition-colors text-left truncate max-w-full"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 border-t border-surface-border p-3 bg-black/40"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about PaperBrain, OpenCV, RAG..."
              className="flex-1 bg-white/[0.05] border border-white/10 rounded-full px-4 py-2 text-xs text-foreground placeholder:text-muted focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-background transition-transform hover:scale-105"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
