# Software Requirements Specification (SRS) — PaperBrain

**Project Name:** PaperBrain  
**Author:** Nachiket Gadilohar  
**Status:** Approved  

---

## 1. Functional Requirements

### 1.1 Document Ingestion & Chunking
- **FR-ING-01**: System MUST accept PDF uploads up to 100MB via drag-and-drop.
- **FR-ING-02**: System MUST parse PDF pages using PyMuPDF (fitz) and extract raw text, tables, and image captions.
- **FR-ING-03**: System MUST split text using recursive character text splitters with 500-token chunk size and 50-token overlap.

### 1.2 Vector Retrieval & Multi-Agent Pipeline
- **FR-RAG-01**: Embeddings MUST be generated using text-embedding-3-small or bge-large-en and stored in FAISS indexes.
- **FR-RAG-02**: 7-Agent execution graph MUST process query -> retrieval -> reranking -> LLM generation -> citation verification.

### 1.3 Streaming Interface & SSE
- **FR-SSE-01**: Backend MUST stream LLM tokens to the frontend using Server-Sent Events (text/event-stream).

---

## 2. User Roles & Access Control
- **Anonymous User**: Upload temporary PDFs (session cleared after 1 hour).
- **Authenticated User**: Save persistent document collections, vector history, and query analytics.

---

## 3. Non-Functional Requirements
- **Performance**: Retrieval from FAISS index MUST take < 50ms for 100,000 vector chunks.
- **Security**: Uploaded files MUST be scanned for malware and stored in isolated tenant S3/local directories.
- **Availability**: 99.9% uptime guaranteed via multi-provider failover.
