# UI/UX Specification Document — PaperBrain

**Project Name:** PaperBrain  
**Author:** Nachiket Gadilohar  

---

## 1. Design Philosophy & Design System
PaperBrain features a dark-first glassmorphism design system:
- Background: Slate 900 (#0f172a)
- Surface: Slate 800 (#1e293b)
- Primary Accent: Indigo 500 (#6366f1)
- Success Pill: Emerald 500 (#10b981)
- Typography: Inter / JetBrains Mono

---

## 2. Workspace Layout & Screen Structure

+-------------------------------------------------------------------------------+
| PaperBrain | document_v1.pdf             [7-Agent Status: Ready] [Upload]    |
+-------------------------------------------------------------------------------+
| [ PDF VIEWER PANEL - 50% ]             | [ CONVERSATIONAL AI CHAT - 50% ]     |
| +------------------------------------+ | +----------------------------------+ |
| | Page 12 / 45                     | | | User: Summarize benchmark results| |
| |                                    | | |                                  | |
| | [ HIGHLIGHTED CITATION BOX ]       | | | PaperBrain: According to Table 2 | |
| | "Accuracy reached 95.4%..."        | | | [Page 12, Section 3], accuracy...| |
| +------------------------------------+ | +----------------------------------+ |
+-------------------------------------------------------------------------------+

---

## 3. Screen States
- Loading State: Step-by-step 7-agent animation indicator (Parsing -> Vectorizing -> Ready).
- Empty State: Drag-and-drop file target with sample academic paper presets.
- Error State: Toast alert indicating provider failover status.
