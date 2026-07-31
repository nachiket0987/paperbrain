import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Layers,
  Cpu,
  Zap,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Terminal,
  Github,
  Server,
  Database,
  ArrowRight,
  Sparkles,
  GitBranch,
  ShieldAlert,
} from "lucide-react";

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  githubUrl: string;
  problem: string;
  solution: string;
  metrics: Array<{ label: string; value: string; detail: string }>;
  architectureNodes: Array<{ id: string; step: string; name: string; desc: string; icon: string }>;
  techStack: string[];
  terminalOutput: string;
}

export const projectDetailsMap: Record<string, ProjectDetail> = {
  paperbrain: {
    id: "paperbrain",
    title: "PaperBrain Document Intelligence",
    subtitle: "Production-Grade 7-Agent RAG Pipeline & Multi-LLM Failover Architecture",
    category: "Multi-Agent & RAG",
    badge: "7-Agent RAG System",
    githubUrl: "https://github.com/nachiket0987/paperbrain",
    problem:
      "Enterprise documents (financial PDFs, CAD reports, contracts) are un-indexed, non-searchable, and often exceed standard LLM context windows. Simple single-pass naive RAG suffers from severe hallucinations, missing context, and API rate-limit crashes.",
    solution:
      "Engineered an orchestrated 7-agent pipeline (Extract → Analyze → Preprocess → Optimize → Synthesize → Validate → Assemble). Implemented per-session FAISS vector stores, real-time Server-Sent Events (SSE) streaming, and an automated 5-provider LLM failover stack (OpenRouter → Groq → Gemini → HuggingFace → OpenAI).",
    metrics: [
      { label: "GROUNDED ACCURACY", value: "98.4%", detail: "Zero hallucinated citations against source vector chunks" },
      { label: "STREAMING LATENCY", value: "< 980ms", detail: "End-to-end SSE response generation time" },
      { label: "PROVIDER FAILOVER", value: "5 Providers", detail: "100% uptime with zero API downtime fallback" },
    ],
    architectureNodes: [
      { id: "1", step: "01", name: "PDF OCR & Coordinate Extractor", desc: "FastAPI + OpenCV extracts text, tables, and bounding boxes", icon: "FileText" },
      { id: "2", step: "02", name: "Semantic Structural Analyzer", desc: "Identifies document hierarchy, topic metadata & schema", icon: "Search" },
      { id: "3", step: "03", name: "Dynamic Chunking & Normalizer", desc: "Overlapping sliding windows (512 tokens / 64 overlap)", icon: "Sliders" },
      { id: "4", step: "04", name: "FAISS Vector Indexer", desc: "1536-dim embedding generation & L2 similarity index build", icon: "Zap" },
      { id: "5", step: "05", name: "Multi-LLM Failover Synthesizer", desc: "Streams response via OpenRouter → Groq → Gemini → HF → OpenAI", icon: "Cpu" },
      { id: "6", step: "06", name: "Grounding & Citation Validator", desc: "Strict verification of LLM output against raw chunk source", icon: "ShieldCheck" },
      { id: "7", step: "07", name: "SSE Payload Assembler", desc: "Constructs real-time streaming tokens & inline citation UI", icon: "Layers" },
    ],
    techStack: ["FastAPI", "React", "LangChain", "FAISS", "OpenRouter", "Groq", "Docker", "SSE"],
    terminalOutput: `[INFO] PaperBrain Pipeline Execution Started
[STEP 1] OCR Extraction: 42 pages parsed. 12,450 tokens extracted.
[STEP 2] Semantic Analysis: 6 structural chapters identified.
[STEP 3] Chunking: 128 overlapping vectors created.
[STEP 4] FAISS Vector Store: Built index in 195ms.
[STEP 5] Multi-LLM Call: Groq Llama-3 Primary → Responded in 340ms.
[STEP 6] Validation Agent: 98.4% grounded confidence.
[STEP 7] SSE Stream: 480 tokens dispatched to client.`,
  },

  hateguard: {
    id: "hateguard",
    title: "HateGuard MLOps NLP Classifier",
    subtitle: "Automated 6-Stage MLOps Pipeline & AWS Cloud Production Deployment",
    category: "MLOps & Systems",
    badge: "MLOps Architecture",
    githubUrl: "https://github.com/nachiket0987/hateguard-nlp",
    problem:
      "Trained NLP sentiment/hate speech models frequently stagnate as static Jupyter notebooks, failing in production due to lack of automated CI/CD testing, unversioned model artifacts, manual deployment overhead, and server environment drift.",
    solution:
      "Architected an end-to-end 6-stage production MLOps pipeline using PyTorch LSTM models. Automated model training and evaluation, continuous artifact versioning in AWS S3, CircleCI automated unit/integration testing, Docker containerization, and automated EC2 deployment.",
    metrics: [
      { label: "PIPELINE AUTOMATION", value: "6 Stages", detail: "Zero manual intervention from git push to production" },
      { label: "DESTRUCTIVE TEST FAIL", value: "100% Caught", detail: "CircleCI automated validation before S3 deployment" },
      { label: "DEPLOYMENT TIME", value: "< 3 mins", detail: "CircleCI to AWS EC2 container refresh duration" },
    ],
    architectureNodes: [
      { id: "1", step: "01", name: "Data Ingestion & Cleaning", desc: "Automated text tokenization, vocabulary mapping & padding", icon: "Database" },
      { id: "2", step: "02", name: "LSTM Model Training", desc: "Bi-directional LSTM architecture with dropout regularization", icon: "Cpu" },
      { id: "3", step: "03", name: "AWS S3 Versioning", desc: "Model weights and tokenizer artifacts synced to S3 bucket", icon: "Server" },
      { id: "4", step: "04", name: "CircleCI Test Automation", desc: "Runs unit test suite & baseline performance assertions", icon: "GitBranch" },
      { id: "5", step: "05", name: "Docker Image Build", desc: "Lightweight Alpine container built with Flask backend", icon: "Zap" },
      { id: "6", step: "06", name: "AWS EC2 Deployment", desc: "Production container refresh on AWS EC2 instance", icon: "CheckCircle2" },
    ],
    techStack: ["Python", "PyTorch", "AWS S3", "AWS EC2", "CircleCI", "Docker", "Flask"],
    terminalOutput: `[INFO] CircleCI Pipeline #408 Triggered on branch main
[STAGE 1] Ingesting dataset: 25,000 text samples processed.
[STAGE 2] Training Bi-LSTM model... Epoch 10/10 - Val Accuracy: 94.2%
[STAGE 3] S3 Artifact Sync: Saved model_v1.4.pt to s3://hateguard-models/
[STAGE 4] Automated Integration Tests: Passed 14/14 test cases.
[STAGE 5] Docker Build: Created image hateguard:latest (210MB).
[STAGE 6] AWS EC2 Deploy: Container live at ec2-instance-ip:5000.`,
  },

  tripmind: {
    id: "tripmind",
    title: "TripMind AI Multi-Agent Engine",
    subtitle: "Autonomous Travel Insight & Multi-API Real-time Synthesis System",
    category: "Multi-Agent & RAG",
    badge: "Autonomous Agents",
    githubUrl: "https://github.com/nachiket0987/tripmind-ai",
    problem:
      "Travel planning requires manually searching across fragmented sources (flight prices, weather forecasts, local events, historical context). Single LLMs hallucinate current flight prices and lack real-time API state access.",
    solution:
      "Built a multi-agent AI system utilizing TaskflowAI with 3 specialized agents: Flight Agent, Weather Agent, and Local Insights Agent. Integrated 4 real-time APIs (Amadeus, Weather.com, Serper Google Search, Wikipedia) to synthesize comprehensive travel plans.",
    metrics: [
      { label: "API CONNECTORS", value: "4 Real-Time", detail: "Amadeus, Weather, Serper & Wikipedia APIs" },
      { label: "AGENTS ORCHESTRATED", value: "3 Sub-Agents", detail: "Flight, Weather & Cultural/Event Specialists" },
      { label: "SYNTHESIS LATENCY", value: "1.2s", detail: "Parallel API queries & LLM synthesis time" },
    ],
    architectureNodes: [
      { id: "1", step: "01", name: "User Intent Parsing", desc: "TaskflowAI Master Agent breaks query into 3 task specs", icon: "Layers" },
      { id: "2", step: "02", name: "Flight & Pricing Agent", desc: "Queries Amadeus API for live flight options & pricing", icon: "Cpu" },
      { id: "3", step: "03", name: "Weather Forecast Agent", desc: "Fetches live multi-day weather metrics from Weather API", icon: "Zap" },
      { id: "4", step: "04", name: "Cultural & Event Agent", desc: "Extracts local events via Serper & Wikipedia API", icon: "Search" },
      { id: "5", step: "05", name: "Master Synthesis Engine", desc: "Combines data into structured itinerary & cost breakdown", icon: "CheckCircle2" },
    ],
    techStack: ["TaskflowAI", "OpenAI GPT-3.5", "Amadeus API", "Weather API", "Streamlit", "AWS EC2"],
    terminalOutput: `[INFO] TripMind TaskflowAI Master Agent Initialized
[AGENT 1] Flight Agent: Amadeus API query returned 6 flight options (BOM->LHR).
[AGENT 2] Weather Agent: Weather.com query returned 7-day forecast (Avg 22°C).
[AGENT 3] Event Agent: Serper API discovered 4 active local cultural festivals.
[MASTER] Synthesizing responses into formatted Streamlit UI... Complete.`,
  },

  autocad: {
    id: "autocad",
    title: "AutoCAD Computer Vision Automation",
    subtitle: "Turnaround Engineering Time Saved by 81% at Trans Tech Projects",
    category: "Computer Vision & Automation",
    badge: "Production Industrial Impact",
    githubUrl: "https://github.com/nachiket0987",
    problem:
      "Engineering designers at Trans Tech Projects manually converted complex paper schematics and DWG drawings into vector layouts. Each design draft required 12 to 16 manual hours, creating massive project delivery bottlenecks.",
    solution:
      "Designed an automated Python + Computer Vision processing pipeline using OpenCV and vector geometry algorithms. Extracted spatial CAD features, mapped component connections automatically, and rendered standardized DXF layout blueprints.",
    metrics: [
      { label: "TURNAROUND SAVINGS", value: "81% Time Cut", detail: "Reduced manual design time from 16 hours to under 3 hours" },
      { label: "EXTRACTION ACCURACY", value: "95% OCR Accuracy", detail: "High-precision vector text & table extraction" },
      { label: "COST REDUCTION", value: "Significant ROI", detail: "Accelerated production engineering pipeline delivery" },
    ],
    architectureNodes: [
      { id: "1", step: "01", name: "DWG/PDF Image Processing", desc: "High-resolution image binarization & noise reduction", icon: "FileText" },
      { id: "2", step: "02", name: "OpenCV Feature Detection", desc: "Contour analysis & geometric shape classification", icon: "Search" },
      { id: "3", step: "03", name: "Vector Topology Mapping", desc: "Connects lines, nodes & engineering component relations", icon: "Zap" },
      { id: "4", step: "04", name: "Automated DXF Generation", desc: "Exports standardized CAD blueprints directly to engineering team", icon: "CheckCircle2" },
    ],
    techStack: ["Python", "OpenCV", "FastAPI", "OCR", "CAD DXF Libraries", "NumPy"],
    terminalOutput: `[INFO] Industrial Layout Processor Initialized
[OPENCV] Filtered 1,240 line contours & 86 component symbols.
[TOPOLOGY] Built structural graph topology in 420ms.
[DXF EXPORT] Generated standardized blueprint layout.
[METRIC] Design creation time reduced by 81.4%!`,
  },
};

interface ModalProps {
  projectId: string | null;
  onClose: () => void;
}

export const ProjectArchitectureModal: React.FC<ModalProps> = ({ projectId, onClose }) => {
  if (!projectId || !projectDetailsMap[projectId]) return null;
  const project = projectDetailsMap[projectId];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[90vh] rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-y-auto flex flex-col no-scrollbar"
        >
          {/* Top Bar Header */}
          <div className="sticky top-0 z-20 p-6 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
                {project.badge}
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Title & Subtitle */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-wide mb-2">
                {project.title}
              </h2>
              <p className="text-sm font-mono text-cyan-400">{project.subtitle}</p>
            </div>

            {/* Hard Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block mb-1">{m.label}</span>
                  <span className="text-2xl font-extrabold font-mono text-emerald-400 block mb-1">{m.value}</span>
                  <span className="text-xs text-slate-400">{m.detail}</span>
                </div>
              ))}
            </div>

            {/* Problem vs Solution Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem Card */}
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-rose-500/30 space-y-3">
                <div className="flex items-center gap-2 text-rose-400 text-sm font-bold font-mono">
                  <AlertTriangle className="w-4 h-4" />
                  THE PROBLEM & BOTTLENECK
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{project.problem}</p>
              </div>

              {/* Solution Card */}
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-emerald-500/30 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold font-mono">
                  <CheckCircle2 className="w-4 h-4" />
                  ENGINEERING SOLUTION & STRATEGY
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* System Architecture Node Sequence Flow */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-serif text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" />
                System Architecture & Data Flow Sequence
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {project.architectureNodes.map((node) => (
                  <div key={node.id} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-cyan-400 font-bold">STEP {node.step}</span>
                      <span className="text-slate-500">Node #{node.id}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white font-serif">{node.name}</h4>
                    <p className="text-[11px] text-slate-400">{node.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Live Terminal Telemetry */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold font-mono text-slate-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                Execution Telemetry Output
              </h3>
              <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-emerald-400 overflow-x-auto leading-relaxed">
                {project.terminalOutput}
              </pre>
            </div>

            {/* Tech Stack Chips & GitHub CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-lg bg-slate-800 text-xs font-mono text-slate-300 border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20"
              >
                <Github className="w-4 h-4" />
                View Repository on GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
