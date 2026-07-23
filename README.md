<div align="center">

# ðŸ§  PaperBrain

### AI-Powered Document Intelligence â€” Chat with Any PDF in Real Time

[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.109+-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![LangChain](https://img.shields.io/badge/LangChain-0.1+-1C3C3C?style=for-the-badge&logo=chainlink&logoColor=white)](https://python.langchain.com/)
[![FAISS](https://img.shields.io/badge/FAISS-Vector_Store-FF6B35?style=for-the-badge)](https://faiss.ai/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-F7DF1E?style=for-the-badge)](https://opensource.org/licenses/MIT)

<br/>

**Upload any PDF â†’ Ask questions â†’ Get AI-grounded answers with real-time streaming**

A production-grade, full-stack RAG application built with a 7-agent pipeline, multi-provider LLM failover, FAISS vector search, and SSE streaming â€” deployed with Vercel + Docker/Coolify.

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-nachiket0987%2Frag--pdf--chat-181717?style=flat-square&logo=github)](https://github.com/nachiket0987/paperbrain)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Nachiket_Gadilohar-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/nachiket-gadilohar-profile/)
[![Email](https://img.shields.io/badge/Email-nachiketlohar0306%40gmail.com-EA4335?style=flat-square&logo=gmail)](mailto:nachiketlohar0306@gmail.com)

</div>

---

## ðŸ“‹ Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Architecture & Workflow](#-architecture--workflow)
- [7-Agent Pipeline](#-7-agent-pipeline)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

---

## ðŸš€ Overview

**PaperBrain** is a full-stack intelligent document assistant that lets users upload PDF files and converse with them using large language models. It combines a **React + TypeScript** frontend with a **FastAPI** backend powered by a custom 7-stage multi-agent pipeline.

The system uses **FAISS** for vector storage and **LangChain** for document processing, with built-in failover across **5 LLM providers** (OpenRouter, Groq, Gemini, HuggingFace, OpenAI). Answers stream in real time using **Server-Sent Events (SSE)**.

> Built to production standards â€” not a toy. Includes rate limiting, anonymous session isolation, Docker deployment, and CORS-safe multi-origin configuration.

---

## âœ¨ Key Features

| Feature | Description |
|---------|-------------|
| ðŸ“„ **PDF Intelligence** | Upload any PDF â€” text extracted, chunked, embedded, and stored in FAISS in seconds |
| ðŸ¤– **7-Agent Pipeline** | Extractor â†’ Analyzer â†’ Preprocessor â†’ Optimizer â†’ Synthesizer â†’ Validator â†’ Assembler |
| âš¡ **Real-Time Streaming** | Answers stream token-by-token via SSE with animated cursor feedback |
| ðŸ”„ **5-Provider Failover** | Automatic failover: OpenRouter â†’ Groq â†’ Gemini â†’ HuggingFace â†’ OpenAI |
| ðŸŽ¯ **10+ AI Models** | Select model from a live dropdown â€” GPT-4o, Claude, Gemini, Mixtral, and more |
| ðŸ”’ **Session Isolation** | Per-browser anonymous UUID keeps each user's FAISS index completely separate |
| ðŸ“š **Source Citations** | Toggle to reveal the exact PDF pages that contributed to each answer |
| ðŸ’¾ **Offline History** | Chat transcripts saved to IndexedDB â€” persists across page reloads, no server needed |
| ðŸ“¦ **FAISS Persistence** | Vector index survives server restarts â€” no need to re-upload PDFs |
| ðŸ›¡ï¸ **Rate Limiting** | Per-IP limits on `/upload` and `/ask` routes to prevent abuse |
| ðŸ³ **Docker Ready** | Dockerfile with non-root user, health checks, and Coolify/VPS deployment config |

---

## ðŸ—ï¸ Architecture & Workflow

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                     React SPA (Frontend)                     â”‚
â”‚                                                              â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”‚
â”‚  â”‚ PDF Uploadâ”‚   â”‚ Model Select â”‚   â”‚ Chat Interface (SSE)â”‚  â”‚
â”‚  â””â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”˜   â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”˜   â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â”‚
â”‚       â”‚                â”‚                       â”‚             â”‚
â”‚       â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜             â”‚
â”‚                        â”‚ HTTP + SSE                          â”‚
â”‚            X-Chat-Session-Id header (UUID)                   â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                         â”‚
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â–¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                   FastAPI Backend                            â”‚
â”‚                                                              â”‚
â”‚  POST /upload          POST /ask/stream        GET /models   â”‚
â”‚       â”‚                      â”‚                      â”‚        â”‚
â”‚       â–¼                      â–¼                      â”‚        â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”              â”‚        â”‚
â”‚  â”‚ PDF Loader  â”‚    â”‚  7-Agent RAG   â”‚â—„â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜        â”‚
â”‚  â”‚ + Chunker   â”‚    â”‚   Pipeline     â”‚                        â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”˜    â””â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”˜                        â”‚
â”‚         â”‚                   â”‚                                 â”‚
â”‚         â–¼                   â–¼                                 â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”‚
â”‚  â”‚  Embeddings â”‚    â”‚  FAISS Retrievalâ”‚   â”‚ LLM Provider   â”‚  â”‚
â”‚  â”‚  (sentence- â”‚    â”‚  (Top-K Chunks)â”‚   â”‚ Failover Chain â”‚  â”‚
â”‚  â”‚ transformers)â”‚   â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜   â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”˜                                             â”‚
â”‚         â”‚                                                    â”‚
â”‚         â–¼                                                    â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚        FAISS Vector Store (Per-Session on Disk)        â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Request Flow

```
User Question
    â”‚
    â–¼
1. Session validated â†’ FAISS index loaded for this browser session
2. Query embedded â†’ Top-K relevant chunks retrieved from FAISS
3. Retrieved context passed to 7-Agent pipeline
4. Pipeline constructs grounded prompt â†’ LLM called (with failover)
5. Answer streamed back via SSE token-by-token
6. Source snippets optionally attached to response
```

---

## ðŸ¤– 7-Agent Pipeline

The heart of this project â€” a sequential multi-agent architecture where each agent has a single, well-defined responsibility:

```
PDF Text
   â”‚
   â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”     â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”     â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  Extractor  â”‚â”€â”€â”€â”€â–¶â”‚  Analyzer   â”‚â”€â”€â”€â”€â–¶â”‚ Preprocessor  â”‚
â”‚             â”‚     â”‚             â”‚     â”‚               â”‚
â”‚ Pulls raw   â”‚     â”‚ Understands â”‚     â”‚ Cleans and    â”‚
â”‚ text chunks â”‚     â”‚ context &   â”‚     â”‚ normalizes    â”‚
â”‚ from FAISS  â”‚     â”‚ intent      â”‚     â”‚ retrieved     â”‚
â”‚ retrieval   â”‚     â”‚             â”‚     â”‚ chunks        â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜     â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜     â””â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”˜
                                                â”‚
         â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
         â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”     â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”     â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”     â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  Optimizer  â”‚â”€â”€â”€â”€â–¶â”‚ Synthesizer â”‚â”€â”€â”€â”€â–¶â”‚   Validator   â”‚â”€â”€â”€â”€â–¶â”‚ Assembler â”‚
â”‚             â”‚     â”‚             â”‚     â”‚               â”‚     â”‚           â”‚
â”‚ Refines the â”‚     â”‚ Generates   â”‚     â”‚ Checks answer â”‚     â”‚ Packages  â”‚
â”‚ prompt for  â”‚     â”‚ answer with â”‚     â”‚ quality and   â”‚     â”‚ final JSON â”‚
â”‚ the LLM     â”‚     â”‚ chosen LLM  â”‚     â”‚ grounding     â”‚     â”‚ + sources â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜     â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜     â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜     â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

---

## ðŸ› ï¸ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3 | UI framework |
| TypeScript | 5.9 | Type safety |
| Vite | 8.0 | Build tool & dev server |
| Tailwind CSS | 3.4 | Utility-first styling |
| Framer Motion | 11 | Animations & transitions |
| React Router | 6 | Client-side routing |
| Radix UI | Latest | Accessible UI primitives |
| Sonner | 2.0 | Toast notifications |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| FastAPI | 0.109+ | REST API framework |
| Uvicorn | 0.27+ | ASGI server |
| LangChain | 0.1+ | Document processing & LLM orchestration |
| FAISS CPU | 1.7+ | Vector similarity search |
| sentence-transformers | 2.2+ | Local embeddings (no API key needed) |
| PyPDF | 3.17+ | PDF text extraction |
| SSE Starlette | 1.8+ | Server-Sent Events streaming |
| Pydantic | 2.0+ | Settings & validation |
| Tenacity | Latest | Retry logic for LLM calls |

### Infrastructure
| Technology | Purpose |
|------------|---------|
| Docker | Containerization with non-root user & health checks |
| Coolify | VPS backend deployment with Traefik reverse proxy |
| Vercel | Frontend hosting with automatic CI/CD |

---

## ðŸ“ Project Structure

```
paperbrain/
â”œâ”€â”€ README.md
â”œâ”€â”€ docs/
â”‚   â””â”€â”€ COOLIFY_PUBLIC_BACKEND_GUIDE.md   # VPS deployment guide
â”‚
â”œâ”€â”€ frontend/
â”‚   â”œâ”€â”€ index.html
â”‚   â”œâ”€â”€ package.json
â”‚   â”œâ”€â”€ vite.config.ts
â”‚   â”œâ”€â”€ tailwind.config.ts
â”‚   â””â”€â”€ src/
â”‚       â”œâ”€â”€ main.tsx                      # App entry point
â”‚       â”œâ”€â”€ App.tsx                       # Router & providers
â”‚       â”œâ”€â”€ pages/
â”‚       â”‚   â”œâ”€â”€ home.tsx                  # Landing page
â”‚       â”‚   â”œâ”€â”€ chat.tsx                  # Main chat interface
â”‚       â”‚   â”œâ”€â”€ about.tsx                 # Project info
â”‚       â”‚   â””â”€â”€ api-status.tsx            # Live API health monitor
â”‚       â”œâ”€â”€ components/
â”‚       â”‚   â”œâ”€â”€ chat/                     # ChatInput, ChatMessage, PDFUpload, ModelSelector
â”‚       â”‚   â”œâ”€â”€ layout/                   # Header, Footer, PageWrapper
â”‚       â”‚   â”œâ”€â”€ sections/                 # Landing page sections
â”‚       â”‚   â””â”€â”€ ui/                       # Reusable primitives (GlassCard, Badge, Buttonâ€¦)
â”‚       â”œâ”€â”€ hooks/                        # use-chat, use-health, use-pdf-upload
â”‚       â”œâ”€â”€ lib/                          # api.ts, constants.ts, storage, session
â”‚       â””â”€â”€ types/                        # Shared TypeScript interfaces
â”‚
â””â”€â”€ backend/
    â”œâ”€â”€ app/
    â”‚   â”œâ”€â”€ main.py                       # FastAPI app, middleware, startup
    â”‚   â”œâ”€â”€ config.py                     # Env-driven settings (Pydantic)
    â”‚   â”œâ”€â”€ routes/
    â”‚   â”‚   â”œâ”€â”€ health.py                 # GET /, /health, /status
    â”‚   â”‚   â”œâ”€â”€ upload.py                 # POST /upload
    â”‚   â”‚   â”œâ”€â”€ chat.py                   # POST /ask, /ask/stream
    â”‚   â”‚   â””â”€â”€ oversight.py              # POST /api/oversight (Sentry tunnel)
    â”‚   â”œâ”€â”€ services/
    â”‚   â”‚   â”œâ”€â”€ vector_store.py           # FAISS session management & LRU eviction
    â”‚   â”‚   â”œâ”€â”€ rate_limiter.py           # Per-IP request limits
    â”‚   â”‚   â””â”€â”€ cleanup.py               # Startup stale-session removal
    â”‚   â””â”€â”€ agents/
    â”‚       â”œâ”€â”€ pipeline.py               # Orchestrates all 7 agents
    â”‚       â”œâ”€â”€ extractor.py              # Agent 1: Context retrieval
    â”‚       â”œâ”€â”€ analyzer.py               # Agent 2: Intent analysis
    â”‚       â”œâ”€â”€ preprocessor.py           # Agent 3: Chunk normalization
    â”‚       â”œâ”€â”€ optimizer.py              # Agent 4: Prompt refinement
    â”‚       â”œâ”€â”€ synthesizer.py            # Agent 5: LLM answer generation
    â”‚       â”œâ”€â”€ validator.py              # Agent 6: Answer quality check
    â”‚       â””â”€â”€ assembler.py              # Agent 7: Final response packaging
    â”œâ”€â”€ requirements.txt
    â”œâ”€â”€ requirements-dev.txt
    â”œâ”€â”€ .env.example
    â”œâ”€â”€ Dockerfile
    â””â”€â”€ .dockerignore
```

---

## ðŸ Getting Started

### Prerequisites

- Python 3.11+
- Node.js 18+
- An [OpenRouter API key](https://openrouter.ai/) (free tier available)

### 1. Clone the Repository

```bash
git clone https://github.com/nachiket0987/paperbrain.git
cd paperbrain
```

### 2. Setup & Run Backend

```bash
cd backend

# Create virtual environment
python -m venv .venv

# Activate (Linux/Mac)
source .venv/bin/activate

# Activate (Windows)
.venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# âœï¸  Open .env and set: OPENROUTER_API_KEY=your_key_here

# Start the server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

âœ… Backend running at: `http://127.0.0.1:8000`  
ðŸ“– Interactive API docs: `http://127.0.0.1:8000/docs`

### 3. Setup & Run Frontend

```bash
# In a new terminal
cd frontend

npm install

# Optional: configure environment
cp .env.example .env

npm run dev
```

âœ… Frontend running at: `http://localhost:5173`

### 4. Try it Out

1. Open `http://localhost:5173`
2. Upload a PDF on the chat page
3. Ask a question â€” watch the answer stream in real time
4. Toggle **Sources** to see which PDF pages were used
5. Switch models using the model selector dropdown

---

## âš™ï¸ Environment Variables

### Backend (`backend/.env`)

```bash
cp backend/.env.example backend/.env
```

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENROUTER_API_KEY` | âœ… Yes | Primary LLM provider key |
| `OPENROUTER_API_BASE` | âœ… Yes | `https://openrouter.ai/api/v1` |
| `DEFAULT_MODEL` | Recommended | Default model ID (e.g. `openai/gpt-4o-mini`) |
| `DEFAULT_PROVIDER` | Recommended | Primary provider hint |
| `CORS_ORIGINS` | âœ… Production | Allowed frontend origins (comma-separated) |
| `FAISS_PERSIST_DIR` | Recommended | Directory for vector index storage |
| `MAX_VECTOR_SESSIONS` | Recommended | Max concurrent sessions (LRU eviction) |
| `FAISS_SESSION_MAX_AGE_DAYS` | Recommended | Auto-cleanup age for stale sessions |
| `RATE_LIMIT_UPLOAD_PER_MINUTE` | Recommended | Upload route rate limit |
| `RATE_LIMIT_ASK_PER_MINUTE` | Recommended | Ask/stream route rate limit |
| `GROQ_API_KEY` | Optional | Fallback provider |
| `OPENAI_DIRECT_API_KEY` | Optional | Fallback provider |
| `GOOGLE_API_KEY` | Optional | Fallback provider |
| `HF_API_KEY` | Optional | Fallback provider |
| `SENTRY_DSN` | Optional | Backend error tracking |

### Frontend (`frontend/.env`)

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_API_BASE_URL` | âœ… Production | Backend public base URL |
| `VITE_DEV_PROXY_TARGET` | Optional | Local Vite proxy target |
| `VITE_SENTRY_DSN` | Optional | Frontend Sentry DSN |
| `VITE_APP_ENV` | Optional | Environment label |

---

## ðŸ“¡ API Reference

> All data routes require the `X-Chat-Session-Id` header (UUID generated by the browser).

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Backend health status |
| `GET` | `/health` | Detailed health check |
| `GET` | `/status` | Session PDF loaded status |
| `GET` | `/models` | Available models & providers |
| `GET` | `/pipeline-info` | Agent pipeline stage descriptions |
| `GET` | `/runtime-summary` | Public runtime metrics (JSON) |
| `POST` | `/upload` | Upload PDF & build FAISS index |
| `POST` | `/ask` | Ask question â†’ JSON response |
| `POST` | `/ask/stream` | Ask question â†’ SSE token stream |
| `POST` | `/api/oversight` | Sentry error tunnel |

### Example: Ask with Streaming

```bash
curl -X POST "http://localhost:8000/ask/stream" \
  -H "Content-Type: application/json" \
  -H "X-Chat-Session-Id: 11111111-2222-4333-8444-555555555555" \
  -d '{
    "question": "Summarize the key findings of this document",
    "model": "openai/gpt-4o-mini",
    "include_sources": true
  }'
```

### Example: Upload PDF

```bash
curl -X POST "http://localhost:8000/upload" \
  -H "X-Chat-Session-Id: 11111111-2222-4333-8444-555555555555" \
  -F "file=@document.pdf"
```

---

## ðŸš€ Deployment

### Backend â†’ Docker + Coolify (VPS)

```bash
# Build Docker image
cd backend
docker build -t paperbrain-backend .

# Run locally with Docker
docker run -p 8000:3000 \
  -e OPENROUTER_API_KEY=your_key \
  -e CORS_ORIGINS=https://your-frontend.vercel.app \
  paperbrain-backend
```

**Coolify Settings:**
- Base Directory: `/backend`
- Dockerfile path: `/Dockerfile`
- Exposed Port: `3000`
- Environment: set `PORT=3000`, `CORS_ORIGINS`, all API keys

See [`docs/COOLIFY_PUBLIC_BACKEND_GUIDE.md`](docs/COOLIFY_PUBLIC_BACKEND_GUIDE.md) for full Traefik + domain setup.

### Frontend â†’ Vercel

| Setting | Value |
|---------|-------|
| Root Directory | `frontend` |
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install --legacy-peer-deps` |
| Environment Variable | `VITE_API_BASE_URL=https://your-backend-domain` |

---

## ðŸ” Troubleshooting

| Problem | Solution |
|---------|----------|
| CORS blocked in browser | Add deployed frontend origin to `CORS_ORIGINS`, redeploy backend |
| Vercel npm peer conflict | Use `--legacy-peer-deps` in install command |
| No model response | Verify at least one provider API key is set and valid |
| Empty/wrong retrieval | Re-upload PDF; check session UUID consistency in headers |
| 404 probe logs | Normal â€” public internet scanners; not an error |

---

## ðŸ¤ Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and run quality checks
4. Commit with a descriptive message: `git commit -m "feat: add your feature"`
5. Push and open a Pull Request with a clear summary

### Quality Checks

```bash
# Frontend
cd frontend
npm run lint
npm run typecheck
npm run build

# Backend
cd backend
ruff check app
mypy app
python -m unittest discover -s tests -p "test_*.py"
```

---

## ðŸ“„ License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

<div align="center">

**Built with â¤ï¸ by [Nachiket Gadilohar](https://linkedin.com/in/nachiket-gadilohar-profile/)**

[![GitHub](https://img.shields.io/badge/GitHub-nachiket0987-181717?style=flat-square&logo=github)](https://github.com/nachiket0987)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/nachiket-gadilohar-profile/)
[![Email](https://img.shields.io/badge/Email-nachiketlohar0306%40gmail.com-EA4335?style=flat-square&logo=gmail)](mailto:nachiketlohar0306@gmail.com)

*If this project helped you, give it a â­ on GitHub!*

</div>

