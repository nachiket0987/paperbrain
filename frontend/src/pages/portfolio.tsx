import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Copy,
  CheckCircle,
  ExternalLink,
  Cpu,
  Zap,
  Layers,
  Maximize2,
  ChevronRight,
  ShieldCheck,
  Server,
  Terminal,
  ArrowRight,
  Play,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { NeuralCanvas } from "@/components/portfolio/neural-canvas";
import { RAGVisualizer } from "@/components/portfolio/rag-visualizer";
import { AIAssistantWidget } from "@/components/portfolio/ai-assistant-widget";
import { ProjectArchitectureModal } from "@/components/portfolio/project-architecture-modal";

interface SkillItem {
  name: string;
  category: string;
  percentage: number;
  iconUrl: string;
}

const skillsList: SkillItem[] = [
  { name: "Python", category: "Languages", percentage: 95, iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "PyTorch", category: "AI / ML", percentage: 90, iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg" },
  { name: "TensorFlow", category: "AI / ML", percentage: 85, iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg" },
  { name: "FastAPI", category: "Backend", percentage: 92, iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg" },
  { name: "FAISS & RAG", category: "Vector AI", percentage: 94, iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "OpenCV", category: "Computer Vision", percentage: 88, iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg" },
  { name: "Docker", category: "MLOps", percentage: 85, iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
  { name: "AWS S3 / EC2", category: "Cloud", percentage: 86, iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "PostgreSQL", category: "Databases", percentage: 84, iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
  { name: "LangChain", category: "Orchestration", percentage: 90, iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "React", category: "Frontend", percentage: 82, iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "CircleCI", category: "MLOps", percentage: 80, iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/circleci/circleci-plain.svg" },
];

export interface ProjectDetailSpec {
  id: string;
  num: string;
  title: string;
  category: string;
  tagline: string;
  problem: string;
  solution: string;
  metrics: string;
  tech: string[];
  github: string;
  detailedSpecs: {
    architecturalHighlights: string[];
    hardResults: Array<{ metric: string; value: string; impact: string }>;
  };
}

const fourProjects: ProjectDetailSpec[] = [
  {
    id: "paperbrain",
    num: "01",
    title: "PaperBrain Document Intelligence",
    category: "Multi-Agent & RAG Architecture",
    tagline: "Production RAG Engine with 7-Agent Pipeline, FAISS Vector Indexing & 5-Provider LLM Failover",
    problem:
      "Enterprise financial PDFs, legal contracts, and technical CAD reports are un-indexed, non-searchable, and exceed standard LLM context windows. Simple single-pass RAG suffers from severe hallucinations and crashes when API limits are hit.",
    solution:
      "Engineered an orchestrated 7-agent pipeline (Extract → Analyze → Preprocess → Optimize → Synthesize → Validate → Assemble). Implemented per-session FAISS vector stores, real-time Server-Sent Events (SSE) streaming, and a 5-provider LLM failover stack (OpenRouter → Groq → Gemini → HuggingFace → OpenAI).",
    metrics: "98.4% Grounded Accuracy • <980ms SSE Latency • 5-Provider Failover",
    tech: ["FastAPI", "React", "FAISS", "LangChain", "OpenRouter", "Groq", "Docker", "SSE Streaming"],
    github: "https://github.com/nachiket0987/paperbrain",
    detailedSpecs: {
      architecturalHighlights: [
        "7-Agent Orchestrated Workflow: Specialized agents perform extraction, semantic chunking, vector indexing, synthesis, grounding verification, and SSE payload assembly.",
        "5-Provider LLM Failover Stack: Zero downtime fallback chain ensuring 100% availability even if primary LLM providers rate-limit.",
        "Per-Session FAISS Vector Store: In-memory dynamic L2 similarity search vector index for real-time document grounding.",
      ],
      hardResults: [
        { metric: "GROUNDED ACCURACY", value: "98.4%", impact: "Zero hallucinated citations against source vector chunks" },
        { metric: "STREAMING LATENCY", value: "< 980ms", impact: "End-to-end SSE real-time token dispatch" },
        { metric: "FAILOVER RELIABILITY", value: "100% Uptime", impact: "Automated failover across 5 major LLM APIs" },
      ],
    },
  },
  {
    id: "autocad",
    num: "02",
    title: "AutoCAD Design Automation Engine",
    category: "Industrial Computer Vision & Automation",
    tagline: "Python + OpenCV Computer Vision Pipeline at Trans Tech Projects Pvt. Ltd., Pune",
    problem:
      "Engineering designers manually converted paper schematics and DWG drawings into vector layouts. Each design draft required 12 to 16 manual hours, creating severe project delivery bottlenecks.",
    solution:
      "Designed an automated Python + Computer Vision processing pipeline using OpenCV and vector geometry algorithms. Extracted spatial CAD contours, mapped component graph topology automatically, and rendered standardized DXF layout blueprints.",
    metrics: "81% Turnaround Time Saved (16h → <3h) • 95% OCR Extraction Accuracy",
    tech: ["Python", "OpenCV", "FastAPI", "OCR", "Vector Geometry", "NumPy", "CAD DXF"],
    github: "https://github.com/nachiket0987",
    detailedSpecs: {
      architecturalHighlights: [
        "OpenCV Contour Analysis: Binarization, morphological filtering, and automated line/symbol shape classification.",
        "Vector Topology Graph Parser: Connects lines, nodes, and engineering component relations deterministically.",
        "Automated DXF Rendering: Directly outputs CAD-compliant DXF blueprints for production engineering teams.",
      ],
      hardResults: [
        { metric: "TURNAROUND REDUCTION", value: "81% Saved", impact: "Reduced design drafting from 16 hours to under 3 hours" },
        { metric: "EXTRACTION ACCURACY", value: "95% OCR", impact: "High-precision PDF-to-XML vector table parsing" },
        { metric: "BUSINESS IMPACT", value: "High ROI", impact: "Accelerated production engineering pipeline delivery at Trans Tech" },
      ],
    },
  },
  {
    id: "hateguard",
    num: "03",
    title: "HateGuard MLOps NLP Classifier",
    category: "MLOps & Cloud Infrastructure",
    tagline: "Automated 6-Stage MLOps Pipeline with AWS S3, CircleCI & Docker Deployment",
    problem:
      "Trained NLP sentiment models frequently stagnate as static Jupyter notebooks, failing in production due to lack of automated CI/CD testing, unversioned model weights, manual deployment overhead, and environment drift.",
    solution:
      "Architected an end-to-end 6-stage production MLOps pipeline using PyTorch Bi-LSTM models. Automated model training and evaluation, continuous artifact versioning in AWS S3, CircleCI automated integration testing, Docker containerization, and automated EC2 deployment.",
    metrics: "100% Automated CI/CD Pipeline • AWS EC2 & S3 Hosted",
    tech: ["PyTorch", "AWS S3", "AWS EC2", "CircleCI", "Docker", "Flask", "Python"],
    github: "https://github.com/nachiket0987/hateguard-nlp",
    detailedSpecs: {
      architecturalHighlights: [
        "6-Stage MLOps Pipeline: Ingestion → LSTM Model Train → S3 Artifact Versioning → CircleCI Testing → Docker Build → AWS EC2 Deployment.",
        "Automated Integration Testing: CircleCI runs unit test suite & baseline accuracy assertions before pushing to AWS S3.",
        "Containerized AWS Host: Lightweight Alpine Docker container refreshed automatically on AWS EC2.",
      ],
      hardResults: [
        { metric: "PIPELINE AUTOMATION", value: "6 Stages", impact: "Zero manual intervention from git push to AWS production" },
        { metric: "DESTRUCTIVE FAILURES", value: "100% Caught", impact: "Automated CircleCI validation prevents broken models in production" },
        { metric: "DEPLOY DURATION", value: "< 3 mins", impact: "Total time from code commit to live AWS container refresh" },
      ],
    },
  },
  {
    id: "tripmind",
    num: "04",
    title: "TripMind Multi-Agent Travel Engine",
    category: "Multi-Agent & Real-Time APIs",
    tagline: "Autonomous TaskflowAI System Orchestrating 3 Specialized Sub-Agents with 4 Real-Time APIs",
    problem:
      "Travel planning requires manually searching across fragmented sources (flight prices, weather forecasts, local events). Single LLMs hallucinate current flight prices and lack real-time API state access.",
    solution:
      "Built a multi-agent AI system utilizing TaskflowAI with 3 specialized agents: Flight Agent, Weather Agent, and Local Insights Agent. Integrated 4 real-time APIs (Amadeus, Weather.com, Serper Google Search, Wikipedia) to synthesize comprehensive travel plans.",
    metrics: "4 Live API Connectors • 3 Sub-Agents • Streamlit on AWS",
    tech: ["TaskflowAI", "OpenAI GPT-3.5", "Amadeus API", "Weather API", "Serper API", "Streamlit", "AWS EC2"],
    github: "https://github.com/nachiket0987/tripmind-ai",
    detailedSpecs: {
      architecturalHighlights: [
        "3 TaskflowAI Specialized Agents: Master Agent delegates tasks to Flight Agent, Weather Agent, and Event Agent.",
        "4 Real-Time API Connectors: Live integration with Amadeus flight state, Weather.com forecasts, Serper Search, and Wikipedia.",
        "Parallel Query Synthesis: Asynchronous API polling combined into a unified Streamlit UI on AWS EC2.",
      ],
      hardResults: [
        { metric: "API INTEGRATIONS", value: "4 Real-Time", impact: "Live flight, weather, search & wiki data feeds" },
        { metric: "AGENTS ORCHESTRATED", value: "3 Sub-Agents", impact: "Flight, Weather & Cultural/Event Specialists" },
        { metric: "SYNTHESIS LATENCY", value: "1.2s", impact: "Fast parallel API aggregation & LLM synthesis" },
      ],
    },
  },
];

export function PortfolioPage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [typewriterText, setTypewriterText] = useState<string>("");

  useEffect(() => {
    const roles = [
      "AI Engineer @ Trans Tech Projects",
      "Specializing in Production RAG",
      "Multi-Agent LLM Orchestrator",
      "Computer Vision & MLOps Engineer",
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    const typeInterval = setInterval(() => {
      const currentRole = roles[roleIdx];
      if (!isDeleting) {
        setTypewriterText(currentRole.substring(0, charIdx + 1));
        charIdx++;
        if (charIdx === currentRole.length) {
          isDeleting = true;
          setTimeout(() => {}, 1500);
        }
      } else {
        setTypewriterText(currentRole.substring(0, charIdx - 1));
        charIdx--;
        if (charIdx === 0) {
          isDeleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
        }
      }
    }, 90);

    return () => clearInterval(typeInterval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nachiketlohar0306@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="bg-[#242424] text-[#F7F7F7] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-[#68B2A0]/80 font-sans selection:bg-[#68B2A0] selection:text-[#242424]">
      {/* Background Neural Canvas */}
      <NeuralCanvas />

      {/* Mitchell Sparrow Sticky Header */}
      <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-40 xl:items-center bg-[#242424]/90 backdrop-blur-md">
        <div className="flex flex-row items-center gap-3">
          <a
            href="https://www.linkedin.com/in/nachiket-gadilohar-profile/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-gray-700 hover:border-[#68B2A0] transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#68B2A0]" />
          </a>
          <a
            href="https://github.com/nachiket0987"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-gray-700 hover:border-[#68B2A0] transition-colors"
            title="GitHub"
          >
            <Github className="w-5 h-5 text-gray-400 hover:text-[#68B2A0]" />
          </a>
        </div>

        <a href="#contact" className="flex flex-row items-center text-gray-300 cursor-pointer gap-2">
          <div className="p-2 rounded-full border border-gray-700 hover:border-[#68B2A0] transition-colors">
            <Mail className="w-5 h-5 text-gray-400 hover:text-[#68B2A0]" />
          </div>
          <span className="uppercase hidden md:inline-flex text-xs tracking-widest text-gray-400">
            Get in Touch
          </span>
        </a>
      </header>

      {/* SECTION 1: HERO SECTION (MITCHELL SPARROW EXACT STYLE) */}
      <section id="hero" className="snap-start h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative">
        {/* Pulsing Animated Radar Circles */}
        <div className="relative flex justify-center items-center pointer-events-none">
          <div className="absolute border border-gray-600/30 rounded-full h-[200px] w-[200px] animate-ping" />
          <div className="absolute border border-gray-600/30 rounded-full h-[300px] w-[300px] animate-ping" />
          <div className="absolute border border-[#68B2A0]/30 h-[510px] w-[510px] md:h-[650px] md:w-[650px] animate-pulse rounded-full" />
          <div className="absolute border border-gray-600/30 rounded-full h-[800px] w-[800px] animate-ping" />
        </div>

        {/* Profile Avatar */}
        <div className="relative z-10">
          <div className="rounded-full h-32 w-32 mx-auto object-cover bg-gradient-to-tr from-[#68B2A0] to-emerald-400 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-[#242424] flex items-center justify-center text-3xl font-bold font-serif-classic text-[#68B2A0]">
              NG
            </div>
          </div>
        </div>

        <div className="z-20 space-y-4 max-w-4xl px-4">
          <h2 className="text-xs md:text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px] font-code">
            Software / Machine Learning Engineer
          </h2>

          <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-6 font-serif-classic min-h-[70px]">
            <span className="text-white">{typewriterText}</span>
            <span className="text-[#68B2A0] animate-pulse">|</span>
          </h1>

          {/* Hero Snap Buttons */}
          <div className="pt-5 flex flex-wrap items-center justify-center gap-3">
            <a href="#about"><button className="heroButton">About</button></a>
            <a href="#experience"><button className="heroButton">Experience</button></a>
            <a href="#skills"><button className="heroButton">Skills</button></a>
            <a href="#projects"><button className="heroButton">Projects</button></a>
            <a href="#rag-pipeline"><button className="heroButton !border-[#68B2A0] !text-[#68B2A0]">7-Agent RAG</button></a>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT SECTION */}
      <section id="about" className="snap-center h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl font-code">
          About
        </h3>

        <div className="flex flex-col md:flex-row items-center gap-10 mt-16 max-w-5xl">
          <div className="flex-shrink-0 w-48 h-48 sm:w-64 sm:h-64 rounded-2xl bg-gradient-to-tr from-slate-900 to-[#68B2A0]/20 border border-slate-700 p-6 flex flex-col items-center justify-center text-center shadow-2xl">
            <div className="p-4 rounded-full bg-[#68B2A0]/10 border border-[#68B2A0]/30 text-[#68B2A0] mb-3">
              <Cpu className="w-10 h-10" />
            </div>
            <h4 className="text-lg font-bold font-serif-classic text-white">Nachiket Gadilohar</h4>
            <p className="text-xs font-code text-[#68B2A0]">AI Engineer @ Trans Tech Projects</p>
            <p className="text-[11px] text-gray-400 mt-1">B.Sc. Physics • M.Sc. Data Science</p>
          </div>

          <div className="space-y-4 text-justify text-slate-300 text-sm md:text-base leading-relaxed">
            <h4 className="text-xl md:text-3xl font-semibold text-white">
              Here is a <span className="underline decoration-[#68B2A0]/50">little</span> background
            </h4>
            <p>
              I am an AI Engineer based in Pune, India. My academic path began with a <strong>B.Sc. in Physics at Fergusson College</strong>, giving me a quantitative foundation in mathematical dynamics, physical modeling, and statistical mechanics. I subsequently earned my <strong>M.Sc. in Data Science at Symbiosis Institute of Geoinformatics</strong>.
            </p>
            <p>
              At <strong>Trans Tech Projects Pvt. Ltd. (Pune)</strong>, I engineer document intelligence systems, computer vision automations, multi-agent RAG architectures, and failover LLM stacks that cut AutoCAD turnaround times by 81% and achieve 95% OCR extraction accuracy in scale production.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: EXPERIENCE SECTION */}
      <section id="experience" className="snap-center h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl font-code">
          Experience
        </h3>

        <div className="w-screen h-3/4 md:h-2/3 md:w-full text-left pb-5 md:pb-10 flex space-x-5 overflow-x-scroll p-6 md:p-10 snap-x snap-mandatory no-scrollbar mt-16">
          <article className="flex drop-shadow-xl flex-col rounded-3xl items-center space-y-0 flex-shrink-0 w-80 md:w-[650px] xl:w-[750px] snap-center bg-gradient-to-tr from-[#1A1A1A] to-[#68B2A0]/15 border border-slate-700/80 p-6 md:p-10 text-white">
            <div className="w-full">
              <div className="md:flex md:justify-between items-center">
                <div>
                  <h4 className="text-lg md:text-3xl font-light text-white font-serif-classic">AI Engineer</h4>
                  <p className="font-bold text-md md:text-2xl mt-1 text-[#68B2A0]">Trans Tech Projects Pvt. Ltd.</p>
                </div>
                <p className="uppercase py-2 md:py-5 text-gray-400 text-xs md:text-sm font-code">
                  Pune, India • Present
                </p>
              </div>

              <ul className="list-disc text-slate-300 space-y-2 text-xs md:text-base text-justify pl-5 mt-4">
                <li>Built a Python + computer-vision automation pipeline that cut AutoCAD design turnaround time by 81% (reducing draft times from 16h to under 3h).</li>
                <li>Developed a FastAPI + OCR document intelligence system achieving 95% extraction accuracy on PDF-to-XML conversion at scale.</li>
                <li>Deployed production multi-agent RAG LLM architectures with containerization, failover observability, and CI/CD automation.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* SECTION 4: SKILLS SECTION */}
      <section id="skills" className="snap-start h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
        <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl font-code">
          Skills
        </h3>
        <h3 className="absolute top-32 md:top-36 uppercase tracking-[3px] text-gray-500 text-xs font-code">
          Hover over a skill for current proficiency
        </h3>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 md:gap-6 mt-24">
          {skillsList.map((skill) => (
            <div key={skill.name} className="group relative flex flex-col items-center justify-center cursor-pointer">
              <img
                src={skill.iconUrl}
                alt={skill.name}
                className="rounded-full border-2 border-[#68B2A0] object-cover p-3 bg-slate-900 w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
              />
              <span className="text-[11px] font-code text-gray-400 mt-2">{skill.name}</span>

              {/* Hover percentage circle overlay */}
              <div className="absolute top-0 opacity-0 group-hover:opacity-95 transition duration-300 ease-in-out bg-white w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 rounded-full z-10 shadow-lg">
                <div className="flex items-center justify-center h-full">
                  <p className="text-lg md:text-2xl font-bold text-black font-code">{skill.percentage}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: PROJECTS SECTION (EXACT 4 PROJECTS IN FULL DETAIL) */}
      <section id="projects" className="snap-start h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl font-code">
          Projects
        </h3>

        {/* Horizontal Scroll Snap Container */}
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 no-scrollbar mt-16">
          {fourProjects.map((proj) => (
            <div
              key={proj.id}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-4 items-center justify-center p-6 md:p-12 h-screen"
            >
              <div className="max-w-4xl w-full p-8 md:p-10 rounded-3xl bg-gradient-to-tr from-[#1A1A1A] via-slate-900 to-[#68B2A0]/20 border border-slate-700/80 shadow-2xl space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-code text-[#68B2A0]">
                    PROJECT {proj.num} // {proj.category}
                  </span>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-[#242424] text-gray-400 hover:text-white transition-colors border border-gray-700"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <h4 className="text-xl md:text-3xl font-semibold text-[#F7F7F7] font-serif-classic">
                  <span className="underline decoration-[#68B2A0]/50">Project {proj.num}:</span> {proj.title}
                </h4>

                <p className="text-xs md:text-sm text-[#68B2A0] font-code">{proj.tagline}</p>

                {/* Problem & Solution Detailed Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-[#1A1A1A] border border-rose-500/30">
                    <span className="text-rose-400 font-bold font-code block mb-1">PROBLEM & BOTTLENECK:</span>
                    <span className="text-gray-300 leading-relaxed">{proj.problem}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#68B2A0]/30">
                    <span className="text-[#68B2A0] font-bold font-code block mb-1">ENGINEERING SOLUTION:</span>
                    <span className="text-gray-300 leading-relaxed">{proj.solution}</span>
                  </div>
                </div>

                {/* Hard Metrics & Architectural Highlights */}
                <div className="p-4 rounded-xl bg-[#1A1A1A] border border-slate-700 space-y-2">
                  <div className="flex items-center justify-between text-xs font-code">
                    <span className="text-[#68B2A0] font-bold">⚡ RESULTS METRICS:</span>
                    <span className="text-emerald-400 font-bold">{proj.metrics}</span>
                  </div>
                  <ul className="space-y-1 text-[11px] text-gray-300 font-code pt-1 border-t border-slate-800">
                    {proj.detailedSpecs.architecturalHighlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#68B2A0]">►</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Chips & Architecture Inspector Modal trigger */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-lg bg-[#1A1A1A] text-[11px] font-code text-gray-300 border border-gray-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProjectId(proj.id)}
                    className="px-5 py-2.5 rounded-full bg-[#68B2A0] hover:bg-[#539886] text-[#242424] font-bold text-xs transition-all shadow-lg cursor-pointer"
                  >
                    Inspect Architecture & Telemetry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: INTERACTIVE 7-AGENT RAG VISUALIZER */}
      <section id="rag-pipeline" className="snap-start min-h-screen flex flex-col justify-center items-center relative px-6 py-20 max-w-7xl mx-auto">
        <RAGVisualizer />
      </section>

      {/* SECTION 7: CONTACT SECTION */}
      <section id="contact" className="snap-start h-screen flex flex-col justify-center items-center relative px-6 max-w-4xl mx-auto text-center">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-xl font-code">
          Contact
        </h3>

        <div className="space-y-6 mt-16 p-8 sm:p-12 rounded-3xl bg-[#1A1A1A] border border-slate-700/80 shadow-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold font-serif-classic text-white">
            Let's Build Production AI Systems
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Open for AI & Production Engineering roles. Feel free to copy my email or connect on LinkedIn.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#68B2A0] text-[#242424] font-bold text-sm shadow-lg cursor-pointer hover:bg-[#539886] transition-all"
            >
              <Mail className="w-4 h-4" />
              {copiedEmail ? "Email Copied!" : "nachiketlohar0306@gmail.com"}
              <Copy className="w-3.5 h-3.5 ml-1 opacity-80" />
            </button>

            <a
              href="https://www.linkedin.com/in/nachiket-gadilohar-profile/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#242424] text-white font-bold text-sm border border-gray-700 transition-all hover:border-[#68B2A0]"
            >
              <Linkedin className="w-4 h-4 text-[#68B2A0]" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Floating AI Knowledge Assistant */}
      <AIAssistantWidget />

      {/* Interactive Architecture Modal */}
      <ProjectArchitectureModal
        projectId={selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
      />
    </div>
  );
}

export default PortfolioPage;
