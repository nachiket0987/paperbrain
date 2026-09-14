# System Architecture Document — PaperBrain

**Project Name:** PaperBrain  
**Author:** Nachiket Gadilohar  

---

## 1. System Overview & Recommended Tech Stack

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Frontend UI** | React / Next.js, TypeScript, Tailwind CSS, PDF.js | High-performance split workspace rendering & interactive canvas highlighting. |
| **Backend API** | FastAPI, Uvicorn, Python 3.11 | Asynchronous HTTP & native Server-Sent Events (SSE) support. |
| **Agent Orchestration** | LangChain, StateGraph | Stateful multi-agent execution pipeline. |
| **Vector Storage** | FAISS (Facebook AI Similarity Search) | High-speed, local in-memory vector search. |
| **Embeddings** | OpenAI Embeddings / HuggingFace Transformers | Dense 1536-dim semantic representation. |
| **LLM Providers** | OpenAI (GPT-4o) & Anthropic (Claude 3.5 Sonnet) | Primary and zero-downtime failover model providers. |

---

## 2. System Architecture Diagram

```mermaid
graph TB
    subgraph Frontend["Frontend Layer (React / Next.js)"]
        UI["Chat Interface & PDF Viewer"]
        SSE_CLIENT["SSE EventSource Stream Client"]
    end

    subgraph Backend["Backend Layer (FastAPI / LangChain)"]
        API["FastAPI Gateway"]
        subgraph Agents["7-Agent RAG Engine"]
            A1["1. Ingestion Agent"]
            A2["2. Chunking Agent"]
            A3["3. Embedding Agent"]
            A4["4. FAISS Retrieval Agent"]
            A5["5. Multi-LLM Router"]
            A6["6. Verification Agent"]
            A7["7. SSE Response Agent"]
        end
    end

    subgraph Storage["Data & Vector Layer"]
        FAISS[("FAISS Vector Index")]
        META[("SQLite Metadata Storage")]
    end

    UI --> API
    API --> Agents
    A1 --> A2 --> A3 --> FAISS
    FAISS --> A4 --> A5 --> A6 --> A7
    A5 -->|"Primary"| OPENAI["OpenAI GPT-4o"]
    A5 -->|"Failover"| ANTHROPIC["Claude 3.5 Sonnet"]
    A7 --> SSE_CLIENT
```

---

## 3. Data Flow Sequence

```mermaid
sequenceDiagram
    participant User as User / Frontend
    participant API as FastAPI Gateway
    participant RAG as 7-Agent RAG Pipeline
    participant FAISS as FAISS Vector DB
    participant LLM as Multi-LLM Provider

    User->>API: Upload PDF & Submit Query
    API->>RAG: Trigger Ingestion & Vector Retrieval
    RAG->>FAISS: Query Vector Embeddings
    FAISS-->>RAG: Return Top-K Semantic Chunks
    RAG->>LLM: Send Context Prompt to GPT-4o / Claude 3.5
    LLM-->>RAG: Stream Completion Tokens
    RAG->>User: Stream SSE Tokens & Citation Page Links
```

---

## 4. API Endpoints Specification
- POST /api/upload: Upload PDF file and initialize 7-agent pipeline.
- GET /api/query/stream: Stream RAG response tokens via SSE.
- GET /api/document/:id: Retrieve document metadata and citation page markers.
