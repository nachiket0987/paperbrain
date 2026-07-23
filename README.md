<div align="center">

# 🧠 PaperBrain

### AI-Powered Document Intelligence — Chat with Any PDF in Real Time

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

**Upload any PDF → Ask questions → Get AI-grounded answers with real-time streaming**

A production-grade, full-stack RAG application built with a 7-agent pipeline, multi-provider LLM failover, FAISS vector search, and SSE streaming — deployed with Vercel + Docker/Coolify.

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-nachiket0987%2Fpaperbrain-181717?style=flat-square&logo=github)](https://github.com/nachiket0987/paperbrain)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Nachiket_Gadilohar-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/nachiket-gadilohar-profile/)
[![Email](https://img.shields.io/badge/Email-nachiketlohar0306%40gmail.com-EA4335?style=flat-square&logo=gmail)](mailto:nachiketlohar0306@gmail.com)

</div>

---

## 📋 Table of Contents

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

## 🚀 Overview

**PaperBrain** is a full-stack intelligent document assistant that lets users upload PDF files and converse with them using large language models. It combines a **React + TypeScript** frontend with a **FastAPI** backend powered by a custom 7-stage multi-agent pipeline.

The system uses **FAISS** for vector storage and **LangChain** for document processing, with built-in failover across **5 LLM providers** (OpenRouter, Groq, Gemini, HuggingFace, OpenAI). Answers stream in real time using **Server-Sent Events (SSE)**.

> Built to production standards — not a toy. Includes rate limiting, anonymous session isolation, Docker deployment, and CORS-safe multi-origin configuration.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 📄 **PDF Intelligence** | Upload any PDF — text extracted, chunked, embedded, and stored in FAISS in seconds |
| 🤖 **7-Agent Pipeline** | Extractor → Analyzer → Preprocessor → Optimizer → Synthesizer → Validator → Assembler |
| ⚡ **Real-Time Streaming** | Answers stream token-by-token via SSE with animated cursor feedback |
| 🔄 **5-Provider Failover** | Automatic failover: OpenRouter → Groq → Gemini → HuggingFace → OpenAI |
| 🎯 **10+ AI Models** | Select model from a live dropdown — GPT-4o, Claude, Gemini, Mixtral, and more |
| 🔒 **Session Isolation** | Per-browser anonymous UUID keeps each user's FAISS index completely separate |
| 📚 **Source Citations** | Toggle to reveal the exact PDF pages that contributed to each answer |
| 💾 **Offline History** | Chat transcripts saved to IndexedDB — persists across page reloads, no server needed |
| 📦 **FAISS Persistence** | Vector index survives server restarts — no need to re-upload PDFs |
| 🛡️ **Rate Limiting** | Per-IP limits on `/upload` and `/ask` routes to prevent abuse |
| 🐳 **Docker Ready** | Dockerfile with non-root user, health checks, and Coolify/VPS deployment config |

---

## 🏗️ Architecture & Workflow

```
+--------------------------------------------------------------+
|                     React SPA (Frontend)                     |
|                                                              |
|  +----------+   +--------------+   +--------------------+   |
|  | PDF Upload|   | Model Select |   | Chat Interface(SSE)|   |
|  +----+-----+   +------+-------+   +----------+---------+   |
|       |                |                       |             |
|       +----------------+-----------------------+             |
|                        | HTTP + SSE                          |
|            X-Chat-Session-Id header (UUID)                   |
+------------------------+-------------------------------------+
                         |
+------------------------v-------------------------------------+
|                   FastAPI Backend                            |
|                                                              |
|  POST /upload          POST /ask/stream        GET /models   |
|       |                      |                      |        |
|       v                      v                      |        |
|  +-------------+    +----------------+              |        |
|  | PDF Loader  |    |  7-Agent RAG   |<-------------+        |
|  | + Chunker   |    |   Pipeline     |                       |
|  +------+------+    +-------+--------+                       |
|         |                   |                                |
|         v                   v                                |
|  +-------------+    +----------------+   +--------------+    |
|  |  Embeddings |    | FAISS Retrieval|   | LLM Provider |    |
|  | (sentence-  |    | (Top-K Chunks) |   | Failover     |    |
|  | transformers)|   +----------------+   +--------------+    |
|  +------+------+                                             |
|         |                                                    |
|         v                                                    |
|  +------------------------------------------------------+    |
|  |      FAISS Vector Store (Per-Session on Disk)        |    |
|  +------------------------------------------------------+    |
+--------------------------------------------------------------+
```

### Request Flow

```
User Question
    |
    v
1. Session validated  --> FAISS index loaded for this browser session
2. Query embedded     --> Top-K relevant chunks retrieved from FAISS
3. Retrieved context  --> Passed to 7-Agent pipeline
4. Pipeline builds grounded prompt --> LLM called (with failover)
5. Answer streamed back via SSE token-by-token
6. Source snippets optionally attached to response
```

---

## 🤖 7-Agent Pipeline

The heart of this project — a sequential multi-agent architecture where each agent has a single, well-defined responsibility:

```
PDF Text
   |
   v
+-------------+     +-------------+     +---------------+
|  Extractor  |---->|  Analyzer   |---->| Preprocessor  |
|             |     |             |     |               |
| Pulls raw   |     | Understands |     | Cleans and    |
| text chunks |     | context &   |     | normalizes    |
| from FAISS  |     | intent      |     | retrieved     |
| retrieval   |     |             |     | chunks        |
+-------------+     +-------------+     +-------+-------+
                                                |
         +--------------------------------------+
         v
+-------------+     +-------------+     +---------------+     +-----------+
|  Optimizer  |---->| Synthesizer |---->|   Validator   |---->| Assembler |
|             |     |             |     |               |     |           |
| Refines the |     | Generates   |     | Checks answer |     | Packages  |
| prompt for  |     | answer with |     | quality and   |     | final JSON|
| the LLM     |     | chosen LLM  |     | grounding     |     | + sources |
+-------------+     +-------------+     +---------------+     +-----------+
```

---

## 🛠️ Tech Stack

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

## 📁 Project Structure

```
paperbrain/
├── README.md
├── docs/
│   └── COOLIFY_PUBLIC_BACKEND_GUIDE.md   # VPS deployment guide
│
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   └── src/
│       ├── main.tsx                      # App entry point
│       ├── App.tsx                       # Router & providers
│       ├── pages/
│       │   ├── home.tsx                  # Landing page
│       │   ├── chat.tsx                  # Main chat interface
│       │   ├── about.tsx                 # Project info
│       │   └── api-status.tsx            # Live API health monitor
│       ├── components/
│       │   ├── chat/                     # ChatInput, ChatMessage, PDFUpload, ModelSelector
│       │   ├── layout/                   # Header, Footer, PageWrapper
│       │   ├── sections/                 # Landing page sections
│       │   └── ui/                       # Reusable primitives (GlassCard, Badge, Button...)
│       ├── hooks/                        # use-chat, use-health, use-pdf-upload
│       ├── lib/                          # api.ts, constants.ts, storage, session
│       └── types/                        # Shared TypeScript interfaces
│
└── backend/
    ├── app/
    │   ├── main.py                       # FastAPI app, middleware, startup
    │   ├── config.py                     # Env-driven settings (Pydantic)
    │   ├── routes/
    │   │   ├── health.py                 # GET /, /health, /status
    │   │   ├── upload.py                 # POST /upload
    │   │   ├── chat.py                   # POST /ask, /ask/stream
    │   │   └── oversight.py              # POST /api/oversight (Sentry tunnel)
    │   ├── services/
    │   │   ├── vector_store.py           # FAISS session management & LRU eviction
    │   │   ├── rate_limiter.py           # Per-IP request limits
    │   │   └── cleanup.py               # Startup stale-session removal
    │   └── agents/
    │       ├── pipeline.py               # Orchestrates all 7 agents
    │       ├── extractor.py              # Agent 1: Context retrieval
    │       ├── analyzer.py               # Agent 2: Intent analysis
    │       ├── preprocessor.py           # Agent 3: Chunk normalization
    │       ├── optimizer.py              # Agent 4: Prompt refinement
    │       ├── synthesizer.py            # Agent 5: LLM answer generation
    │       ├── validator.py              # Agent 6: Answer quality check
    │       └── assembler.py              # Agent 7: Final response packaging
    ├── requirements.txt
    ├── requirements-dev.txt
    ├── .env.example
    ├── Dockerfile
    └── .dockerignore
```

---

## 🏁 Getting Started

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
# Open .env and set: OPENROUTER_API_KEY=your_key_here

# Start the server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

✅ Backend running at: `http://127.0.0.1:8000`  
📖 Interactive API docs: `http://127.0.0.1:8000/docs`

### 3. Setup & Run Frontend

```bash
# In a new terminal
cd frontend

npm install

# Optional: configure environment
cp .env.example .env

npm run dev
```

✅ Frontend running at: `http://localhost:5173`

### 4. Try it Out

1. Open `http://localhost:5173`
2. Upload a PDF on the chat page
3. Ask a question — watch the answer stream in real time
4. Toggle **Sources** to see which PDF pages were used
5. Switch models using the model selector dropdown

---

## ⚙️ Environment Variables

### Backend (`backend/.env`)

```bash
cp backend/.env.example backend/.env
```

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENROUTER_API_KEY` | ✅ Yes | Primary LLM provider key |
| `OPENROUTER_API_BASE` | ✅ Yes | `https://openrouter.ai/api/v1` |
| `DEFAULT_MODEL` | Recommended | Default model ID (e.g. `openai/gpt-4o-mini`) |
| `DEFAULT_PROVIDER` | Recommended | Primary provider hint |
| `CORS_ORIGINS` | ✅ Production | Allowed frontend origins (comma-separated) |
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
| `VITE_API_BASE_URL` | ✅ Production | Backend public base URL |
| `VITE_DEV_PROXY_TARGET` | Optional | Local Vite proxy target |
| `VITE_SENTRY_DSN` | Optional | Frontend Sentry DSN |
| `VITE_APP_ENV` | Optional | Environment label |

---

## 📡 API Reference

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
| `POST` | `/ask` | Ask question — JSON response |
| `POST` | `/ask/stream` | Ask question — SSE token stream |
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

## 🚀 Deployment

### Backend → Docker + Coolify (VPS)

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

### Frontend → Vercel

| Setting | Value |
|---------|-------|
| Root Directory | `frontend` |
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install --legacy-peer-deps` |
| Environment Variable | `VITE_API_BASE_URL=https://your-backend-domain` |

---

## 🔍 Troubleshooting

| Problem | Solution |
|---------|----------|
| CORS blocked in browser | Add deployed frontend origin to `CORS_ORIGINS`, redeploy backend |
| Vercel npm peer conflict | Use `--legacy-peer-deps` in install command |
| No model response | Verify at least one provider API key is set and valid |
| Empty/wrong retrieval | Re-upload PDF; check session UUID consistency in headers |
| 404 probe logs | Normal — public internet scanners; not an error |

---

## 🤝 Contributing

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

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

<div align="center">

**Built with ❤️ by [Nachiket Gadilohar](https://linkedin.com/in/nachiket-gadilohar-profile/)**

[![GitHub](https://img.shields.io/badge/GitHub-nachiket0987-181717?style=flat-square&logo=github)](https://github.com/nachiket0987)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/nachiket-gadilohar-profile/)
[![Email](https://img.shields.io/badge/Email-nachiketlohar0306%40gmail.com-EA4335?style=flat-square&logo=gmail)](mailto:nachiketlohar0306@gmail.com)

*If this project helped you, give it a ⭐ on GitHub!*

</div>
