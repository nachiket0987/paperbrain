# System Architecture Document — PaperBrain

**Project Name:** PaperBrain  
**Author:** Nachiket Gadilohar  

---

## 1. System Overview & Tech Stack

```mermaid
graph TB
    subgraph Frontend["Frontend Layer (React / Next.js)"]
        UI["Chat Interface & PDF Viewer"]
        SSE_CLIENT["SSE Event Source Stream"]
    end

    subgraph Backend["Backend Layer (FastAPI / LangChain)"]
        API["FastAPI Gateway"]
        AGENT_ORCH["7-Agent RAG Orchestrator"]
        LLM_ROUTER["Multi-Provider Failover Router"]
    end

    subgraph VectorEngine["Vector & Storage Layer"]
        FAISS[("FAISS Vector Index")]
        META_DB[("SQLite / Postgres Metadata")]
    end

    UI --> API
    API --> AGENT_ORCH
    AGENT_ORCH --> FAISS
    AGENT_ORCH --> LLM_ROUTER
    LLM_ROUTER -->|"Primary"| OPENAI["OpenAI API"]
    LLM_ROUTER -->|"Fallback"| ANTHROPIC["Anthropic API"]
    AGENT_ORCH --> SSE_CLIENT
```

### Tech Stack Details:
- **Frontend**: React, TypeScript, Tailwind CSS, PDF.js.
- **Backend API**: FastAPI, Uvicorn, Python 3.11.
- **Orchestration**: LangChain, Custom StateGraph Agents.
- **Vector Database**: FAISS (Facebook AI Similarity Search).
- **Embeddings**: OpenAI Embeddings / HuggingFace Transformers.
