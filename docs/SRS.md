# Software Requirements Specification (SRS) — PaperBrain

**Project Name:** PaperBrain  
**Author:** Nachiket Gadilohar  
**Status:** Approved  

---

## 1. Document Overview & Scope
This document specifies the functional, data, security, and performance requirements for **PaperBrain**, an AI PDF intelligence system powered by a 7-agent RAG architecture.

---

## 2. User Roles & Access Control

| Role | Permissions |
| :--- | :--- |
| **Guest User** | Upload temporary PDFs (session auto-cleared after 1 hour of inactivity). |
| **Authenticated User** | Save document libraries, persistent FAISS indexes, query history, and custom agent prompts. |
| **System Admin** | Monitor LLM API key usage, provider failover logs, and vector database storage health. |

---

## 3. Functional Requirements

### 3.1 Document Ingestion & Vector Indexing
- **FR-ING-01**: System MUST accept PDF uploads up to 100MB via drag-and-drop or file selector.
- **FR-ING-02**: System MUST parse PDF pages using PyMuPDF (fitz) and extract raw text, tables, and page metadata.
- **FR-ING-03**: System MUST split document text into chunks using 500-token sizes with 50-token overlapping boundaries.
- **FR-ING-04**: Embeddings MUST be generated using text-embedding-3-small or bge-large-en and stored in a local FAISS index.

### 3.2 7-Agent RAG Execution Engine
- **FR-RAG-01**: The 7-agent pipeline MUST execute sequentially and asynchronously: Ingestion -> Chunking -> Embedding -> FAISS Retrieval -> LLM Routing -> Fact Verification -> SSE Formatting.
- **FR-RAG-02**: The Verification Agent MUST verify every generated claim against retrieved context and reject ungrounded assertions.

### 3.3 Real-Time Streaming & Failover
- **FR-STR-01**: System MUST stream LLM tokens to the frontend using Server-Sent Events (text/event-stream).
- **FR-FL-01**: If primary LLM provider fails (HTTP 429/5xx), system MUST route the request to fallback provider within < 200ms.

---

## 4. Business Rules & Data Validation Rules
- **BR-01**: Document text MUST NOT leave the application environment except when sent over encrypted TLS to LLM providers.
- **VR-01**: Uploaded files MUST pass magic-number header validation to verify true PDF file type before parsing.

---

## 5. Security & Privacy Requirements
- **SEC-01**: All data transmissions MUST enforce TLS 1.3 encryption.
- **SEC-02**: Uploaded PDF files MUST be stored in isolated tenant directories with sanitized filenames.

---

## 6. Non-Functional Performance Thresholds
- **NFR-PERF-01**: FAISS vector retrieval latency MUST be < 50ms for 100,000 document vector chunks.
- **NFR-PERF-02**: Time-To-First-Token (TTFT) MUST NOT exceed 800ms.

---

## 7. Acceptance Criteria
1. PDF upload, chunking, and FAISS indexing complete in < 5 seconds for standard papers.
2. SSE stream tokens render continuously without text corruption or UI delay.
3. Provider failover triggers automatically without user intervention when primary API fails.
