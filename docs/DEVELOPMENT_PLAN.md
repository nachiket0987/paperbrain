# Development Plan & Roadmap — PaperBrain

**Project Name:** PaperBrain  
**Author:** Nachiket Gadilohar  

---

## 1. Phase Roadmap

### Phase 1: Ingestion & Vector Engine
- [x] PyMuPDF parser setup & FAISS index integration.

### Phase 2: 7-Agent RAG Pipeline
- [x] Implement multi-provider LLM failover router (OpenAI + Anthropic).
- [x] Implement SSE streaming endpoint in FastAPI.

### Phase 3: Split Workspace Frontend
- [x] Build React PDF.js viewer with coordinate highlight sync.

### Phase 4: Verification & Deployment
- [x] Dockerize backend/frontend and deploy with CI/CD pipeline.
