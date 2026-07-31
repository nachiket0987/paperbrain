import React, { useState } from "react";
import { Bot, Send, User, Sparkles, X, Terminal, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

const suggestedPrompts = [
  "What is Nachiket's core AI expertise?",
  "Tell me about the 81% AutoCAD automation.",
  "How does PaperBrain's 7-agent pipeline work?",
  "What is Nachiket's academic background?",
];

const knowledgeBase: Record<string, string> = {
  expertise:
    "Nachiket is an AI Engineer at Trans Tech Projects Pvt. Ltd. (Pune) specializing in Retrieval-Augmented Generation (RAG), multi-agent LLM orchestration, production document intelligence, and computer vision pipelines.",
  autocad:
    "At Trans Tech Projects, Nachiket engineered a Python + Computer Vision automation pipeline that reduced AutoCAD engineering design turnaround times by 81%, automating layout parsing and vector drawing generation.",
  paperbrain:
    "PaperBrain is Nachiket's featured production RAG document intelligence system. It orchestrates a 7-Agent pipeline (Extract → Analyze → Preprocess → Optimize → Synthesize → Validate → Assemble) with FAISS vector search, real-time SSE streaming, and a 5-provider LLM failover architecture.",
  academic:
    "Nachiket holds a B.Sc. in Physics from Fergusson College and an M.Sc. in Data Science from Symbiosis Institute of Geoinformatics, combining fundamental analytical physics with advanced machine learning.",
  hateguard:
    "HateGuard NLP is a 6-stage MLOps hate speech classification pipeline using LSTM models, AWS S3 artifacts, CircleCI automated testing, and Dockerized deployment on AWS EC2.",
  tripmind:
    "TripMind AI is a multi-agent travel intelligence system built with TaskflowAI, integrating 4 real-time APIs (Amadeus, Weather.com, Serper, Wikipedia) and deployed on AWS EC2.",
  contact:
    "You can reach Nachiket directly at nachiketlohar0306@gmail.com or on LinkedIn at linkedin.com/in/nachiket-gadilohar-profile/.",
};

export const AIAssistantWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hello! I am Nachiket's AI Assistant. Ask me anything about his RAG pipelines, multi-agent systems, or engineering experience!",
      timestamp: "Just now",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = knowledgeBase.expertise;
      const lower = textToSend.toLowerCase();

      if (lower.includes("autocad") || lower.includes("automation") || lower.includes("81")) {
        botResponse = knowledgeBase.autocad;
      } else if (lower.includes("paperbrain") || lower.includes("rag") || lower.includes("agent") || lower.includes("pipeline")) {
        botResponse = knowledgeBase.paperbrain;
      } else if (lower.includes("academic") || lower.includes("education") || lower.includes("physics") || lower.includes("symbiosis") || lower.includes("fergusson")) {
        botResponse = knowledgeBase.academic;
      } else if (lower.includes("hateguard") || lower.includes("mlops") || lower.includes("lstm")) {
        botResponse = knowledgeBase.hateguard;
      } else if (lower.includes("trip") || lower.includes("travel")) {
        botResponse = knowledgeBase.tripmind;
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("hire") || lower.includes("linkedin")) {
        botResponse = knowledgeBase.contact;
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold shadow-xl shadow-cyan-500/25 hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <Sparkles className="w-5 h-5 fill-slate-950 animate-spin" />
        <span className="hidden sm:inline">Ask AI Assistant</span>
      </button>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[520px] rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Modal Header */}
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-serif">Nachiket's AI Assistant</h4>
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Knowledge Base Active
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-cyan-500 text-slate-950 font-medium rounded-tr-none"
                        : "bg-slate-800/90 text-slate-200 border border-slate-700/60 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2 items-center text-xs text-slate-400 font-mono pl-9">
                  <span className="animate-pulse">AI is synthesizing...</span>
                </div>
              )}
            </div>

            {/* Suggested Prompts */}
            <div className="p-2.5 bg-slate-950/60 border-t border-slate-800 flex gap-2 overflow-x-auto no-scrollbar">
              {suggestedPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-mono border border-slate-700 cursor-pointer flex items-center gap-1"
                >
                  <ChevronRight className="w-2.5 h-2.5 text-cyan-400" />
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about AI projects or RAG..."
                className="flex-1 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <button
                onClick={() => handleSend()}
                className="p-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
