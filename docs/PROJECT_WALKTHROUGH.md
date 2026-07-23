# Project walkthrough (agent glance)

End-to-end map of **paperbrain** for reviews and safe edits.

## 1. User journey

1. Open SPA â†’ anonymous `X-Chat-Session-Id` in `localStorage` ([`chat-session.ts`](frontend/src/lib/chat-session.ts)).
2. `/chat` â†’ upload PDF â†’ `POST /upload` â†’ chunks embedded into session FAISS folder.
3. Ask question â†’ `POST /ask` or `POST /ask/stream` (SSE).
4. UI shows user/assistant bubbles; history saved to IndexedDB per PDF name.
5. Preferences (model, streaming, sources) in `localStorage` via [`storage.ts`](frontend/src/lib/storage.ts).

## 2. Frontend layout

```text
frontend/src/
â”œâ”€â”€ main.tsx              # Sentry init, React root
â”œâ”€â”€ App.tsx               # Router, ChatProvider, Sentry ErrorBoundary
â”œâ”€â”€ pages/
â”‚   â”œâ”€â”€ chat.tsx          # ChatContainer only
â”‚   â”œâ”€â”€ home.tsx, about.tsx, api-status.tsx
â”œâ”€â”€ components/chat/
â”‚   â”œâ”€â”€ chat-container.tsx  # Orchestrator: upload, history, stream toggle
â”‚   â”œâ”€â”€ chat-message.tsx    # Bubbles + TypingIndicator (CSS streaming UI)
â”‚   â”œâ”€â”€ chat-input.tsx
â”‚   â””â”€â”€ pdf-upload.tsx, model-selector.tsx
â”œâ”€â”€ hooks/
â”‚   â”œâ”€â”€ use-chat.ts         # Primary chat state for /chat
â”‚   â””â”€â”€ use-pdf-upload.ts
â”œâ”€â”€ context/
â”‚   â””â”€â”€ chat-context.tsx    # Global mirror of chat/upload (keep aligned with use-chat)
â”œâ”€â”€ lib/
â”‚   â”œâ”€â”€ api.ts              # fetch + streamQuestion (AbortController)
â”‚   â”œâ”€â”€ chat-history.ts     # createChatEntry, getChatEntryReactKey
â”‚   â”œâ”€â”€ storage.ts          # localStorage + IndexedDB sessions
â”‚   â””â”€â”€ sentry.ts, env.ts, constants.ts
â””â”€â”€ types/index.ts          # ChatEntry, API types, AI_MODELS
```

## 3. Backend layout

```text
backend/app/
â”œâ”€â”€ main.py           # CORS, routes, middleware
â”œâ”€â”€ routes/           # health, upload, chat (ask + stream), oversight (Sentry tunnel)
â”œâ”€â”€ services/         # vector store, rate limit, session cleanup
â””â”€â”€ agents/           # retrieve â†’ optimize â†’ answer â†’ validate
```

Session isolation: header `X-Chat-Session-Id` â†’ separate FAISS directory per browser.

## 4. Chat state & â€œinvalidationâ€

This project does **not** use React Query.

| Concern | Mechanism |
|---------|-----------|
| Live UI | `useChat` `setState` on send/stream/clear |
| Cross-tab / refresh | `loadChatSession` / `saveChatSession` (IndexedDB) |
| List of saved sessions | `listChatSessions()`; refreshed when `chatHistory` or `showSessions` changes |
| Restore session | `setChatHistory` in `handleRestoreSession` |

New messages get `ChatEntry.id` from `createChatEntry()`; UI keys via `getChatEntryReactKey()`.

## 5. Streaming implementation

- **Toggle:** `prefKeys.STREAMING_ENABLED` in localStorage.
- **While loading:** `streamingAnswer` string grows per SSE token; `TypingIndicator` renders partial text.
- **On complete:** `onDone` appends full `ChatEntry` to `chatHistory`, clears `streamingAnswer`, `isLoading=false`.
- **Stop:** `cancelStream()` aborts fetch + bumps `streamGenerationRef`.
- **New send while active:** prior stream aborted; stale callbacks ignored by generation id.

## 6. Recent fix: `/chat` DOM crash (Sentry)

**Symptom:** `NotFoundError: insertBefore` ~2s into second streamed reply (Chrome, production).

**Cause:** Framer Motion inside `<p>` updated every SSE token + branch swap dots â†” text.

**Resolution (May 2026):** CSS-only `TypingIndicator`, stream abort/generation guards, stable React keys. Monitor Sentry issue `8d59c4e6` after deploy.

## 7. Verification checklist

```bash
npm run check && npm run build
```

Manual `/chat`:

- Upload PDF â†’ stream answer â†’ second question while streaming completes.
- Stop mid-stream â†’ send again.
- Clear chat / restore IndexedDB session â€” no ErrorBoundary crash.

## 8. Related docs

- User-facing: [`README.md`](README.md)
- Deploy: `docs/VERCEL_PRODUCTION_GUARDRAILS.md`, `docs/DOCKER_VPS_BACKEND_PLAYBOOK.md`
- Agent rules: [`CLAUDE.md`](CLAUDE.md)

