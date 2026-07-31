import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Search,
  Sliders,
  Zap,
  Cpu,
  CheckCircle2,
  Layers,
  ArrowRight,
  ShieldCheck,
  Play,
  RotateCcw,
  Server,
  Activity,
} from "lucide-react";

interface AgentStep {
  id: string;
  name: string;
  role: string;
  icon: React.ElementType;
  description: string;
  status: "idle" | "running" | "completed";
  latencyMs: number;
  outputSummary: string;
}

const initialAgents: AgentStep[] = [
  {
    id: "extract",
    name: "Extraction Agent",
    role: "OCR & Document Parsing",
    icon: FileText,
    description: "Extracts raw text, table structures, and bounding coordinates from PDF documents using FastAPI + OCR.",
    status: "idle",
    latencyMs: 140,
    outputSummary: "Parsed 42 pages, extracted 12,450 tokens & 8 complex data tables.",
  },
  {
    id: "analyze",
    name: "Analysis Agent",
    role: "Semantic Structural Analysis",
    icon: Search,
    description: "Evaluates document taxonomy, heading hierarchy, metadata fields, and semantic density.",
    status: "idle",
    latencyMs: 85,
    outputSummary: "Identified 6 core topic clusters & mapped document metadata schema.",
  },
  {
    id: "preprocess",
    name: "Preprocess Agent",
    role: "Dynamic Chunking & Normalization",
    icon: Sliders,
    description: "Splits text into context-aware chunks using overlap windows and strips encoding artifacts.",
    status: "idle",
    latencyMs: 62,
    outputSummary: "Generated 128 overlapping chunks (chunk size: 512, overlap: 64).",
  },
  {
    id: "optimize",
    name: "Optimization Agent",
    role: "Vector Embedding & FAISS Indexing",
    icon: Zap,
    description: "Generates high-dimensional vector embeddings and builds local FAISS index for retrieval.",
    status: "idle",
    latencyMs: 195,
    outputSummary: "Built 1536-dim vector store with L2 similarity search indexing.",
  },
  {
    id: "synthesize",
    name: "Synthesis Agent",
    role: "Multi-Provider LLM Generation",
    icon: Cpu,
    description: "Queries multi-provider LLM failover stack (OpenRouter → Groq → Gemini → HuggingFace → OpenAI).",
    status: "idle",
    latencyMs: 340,
    outputSummary: "Streamed synthesis answer with zero failover retries needed.",
  },
  {
    id: "validate",
    name: "Validation Agent",
    role: "Fact Grounding & Citation Check",
    icon: ShieldCheck,
    description: "Cross-checks LLM synthesis against raw vector chunk citations to eliminate hallucinations.",
    status: "idle",
    latencyMs: 110,
    outputSummary: "Verification score: 98.4% grounded accuracy against source text.",
  },
  {
    id: "assemble",
    name: "Assembly Agent",
    role: "SSE Stream Assembly",
    icon: Layers,
    description: "Assembles final response payload with inline citation badges and real-time SSE streaming format.",
    status: "idle",
    latencyMs: 45,
    outputSummary: "Constructed SSE payload (Total latency: 977ms end-to-end).",
  },
];

export const RAGVisualizer: React.FC = () => {
  const [agents, setAgents] = useState<AgentStep[]>(initialAgents);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [activeProvider, setActiveProvider] = useState<string>("Groq Llama-3 (Primary)");

  const runSimulation = () => {
    setIsRunning(true);
    setActiveStepIndex(0);
    
    // Reset status
    setAgents((prev) => prev.map((a) => ({ ...a, status: "idle" })));

    let index = 0;
    const interval = setInterval(() => {
      if (index < initialAgents.length) {
        setActiveStepIndex(index);
        setAgents((prev) =>
          prev.map((a, i) => {
            if (i < index) return { ...a, status: "completed" };
            if (i === index) return { ...a, status: "running" };
            return { ...a, status: "idle" };
          })
        );
        index++;
      } else {
        clearInterval(interval);
        setAgents((prev) => prev.map((a) => ({ ...a, status: "completed" })));
        setIsRunning(false);
      }
    }, 700);
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setActiveStepIndex(0);
    setAgents(initialAgents);
  };

  const activeAgent = agents[activeStepIndex];

  return (
    <div className="w-full max-w-6xl mx-auto my-12 p-6 md:p-8 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-cyan-500/20 shadow-2xl relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-2">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            LIVE PIPELINE ARCHITECTURE ARCHTYPE
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-serif text-white tracking-wide">
            PaperBrain 7-Agent RAG Orchestrator
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Interactive breakdown of the multi-agent pipeline powering production document intelligence.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={runSimulation}
            disabled={isRunning}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-semibold text-sm transition-all duration-300 shadow-lg shadow-cyan-500/25 disabled:opacity-50 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            {isRunning ? "Simulating Pipeline..." : "Run Pipeline Demo"}
          </button>
          <button
            onClick={resetSimulation}
            disabled={isRunning}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm transition-colors border border-slate-700 cursor-pointer"
            title="Reset"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Failover Provider Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs font-mono mb-8">
        <div className="flex items-center gap-2">
          <Server className="w-4 h-4 text-cyan-400" />
          <span className="text-slate-400">LLM Failover Stack:</span>
          <span className="text-emerald-400 font-semibold">{activeProvider}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <span>Failover Chain:</span>
          <span className="text-slate-300">OpenRouter → Groq → Gemini → HuggingFace → OpenAI</span>
        </div>
      </div>

      {/* 7-Step Pipeline Nodes Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 mb-8">
        {agents.map((agent, index) => {
          const Icon = agent.icon;
          const isActive = index === activeStepIndex;
          const isCompleted = agent.status === "completed";
          const isCurrentRunning = agent.status === "running";

          return (
            <button
              key={agent.id}
              onClick={() => setActiveStepIndex(index)}
              className={`flex flex-col items-center p-3 rounded-2xl border text-center transition-all duration-300 cursor-pointer relative ${
                isActive
                  ? "bg-cyan-950/40 border-cyan-400 shadow-lg shadow-cyan-500/20 scale-105"
                  : isCompleted
                  ? "bg-slate-950/60 border-emerald-500/40 text-slate-300"
                  : "bg-slate-950/40 border-slate-800 text-slate-500 hover:border-slate-700"
              }`}
            >
              {/* Step indicator dot */}
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono mb-2 ${
                  isCurrentRunning
                    ? "bg-cyan-500 text-slate-950 animate-bounce"
                    : isCompleted
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                    : isActive
                    ? "bg-cyan-500 text-slate-950"
                    : "bg-slate-800 text-slate-400"
                }`}
              >
                {isCompleted ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : index + 1}
              </div>

              <Icon
                className={`w-5 h-5 mb-1.5 ${
                  isActive ? "text-cyan-400" : isCompleted ? "text-emerald-400" : "text-slate-400"
                }`}
              />
              <span className="text-[11px] font-semibold tracking-tight text-slate-200 line-clamp-1">
                {agent.name.replace(" Agent", "")}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Step Deep-Dive Card */}
      <AnimatePresence mode="wait">
        {activeAgent && (
          <motion.div
            key={activeAgent.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 rounded-2xl bg-slate-950/90 border border-slate-800"
          >
            {/* Agent Overview */}
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  {React.createElement(activeAgent.icon, { className: "w-6 h-6" })}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white font-serif">{activeAgent.name}</h4>
                  <p className="text-xs font-mono text-cyan-400">{activeAgent.role}</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed pt-2">
                {activeAgent.description}
              </p>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 flex items-center justify-between">
                <span>Output Telemetry:</span>
                <span>{activeAgent.outputSummary}</span>
              </div>
            </div>

            {/* Metrics & Execution Stats */}
            <div className="flex flex-col justify-between p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div>
                <span className="text-xs text-slate-500 font-mono block mb-1">EXECUTION LATENCY</span>
                <span className="text-3xl font-extrabold text-cyan-400 font-mono">
                  {activeAgent.latencyMs} <span className="text-sm font-normal text-slate-400">ms</span>
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-500 font-mono block mb-1">STATUS</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Ready / Deployed
                </span>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                FAISS Vector Similarity • SSE Real-Time Stream
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
