# Development Plan & Roadmap — PaperBrain

**Project Name:** PaperBrain  
**Author:** Nachiket Gadilohar  

---

## 1. Roadmap & Phase Breakdown

```mermaid
gantt
    title PaperBrain Roadmap
    dateFormat  YYYY-MM-DD
    section Phase 1: Ingestion Engine
    PyMuPDF & FAISS Setup        :p1, 2026-09-01, 5d
    section Phase 2: RAG Pipeline
    7-Agent Pipeline & SSE API    :p2, after p1, 7d
    section Phase 3: Split Workspace
    React PDF Viewer & Citation Sync:p3, after p2, 6d
    section Phase 4: Production
    Dockerization & Deployment   :p4, after p3, 4d
```

---

## 2. Definition of Done (DoD)
1. 100% of 7 agents execute cleanly in sequence.
2. Citation pills highlight exact PDF coordinates.
3. Sub-second TTFT streaming via SSE verified.
