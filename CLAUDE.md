# NOVA AI — Project Rules

Arabic-first AI SaaS platform. Stack: React + TypeScript + Tailwind + Supabase, AI via secure server-side function.

## Workflow (Claude Code roadmap methodology)
- Plan first on large tasks, agree the plan, then execute phase by phase (see phases below).
- Keep context clean per task; explore separately from execution.
- Verify before calling anything done: `npm run typecheck` and `npm run build` must pass (CI runs both).

## Non-negotiable rules
- Arabic is the default language, full RTL. English is secondary. Use logical Tailwind utilities (`ms-*`, `me-*`, `ps-*`, `pe-*`, `text-start`, `start-*`), never `ml-/mr-/left-/right-` for layout.
- Brand colors only via Tailwind tokens: navy #071426, blue #2563EB, cyan #06B6D4, gray #94A3B8, white.
- All user-facing text lives in `src/copy.ts` (ar + en, same shape). No hardcoded strings in components.
- NEVER expose API keys in frontend code. Secrets live in server-side env only. Only `VITE_SUPABASE_*` public values may be in the client.
- NEVER fake AI output or fake payments/subscriptions. Without an API key use a clearly labeled demo mode.
- Payments: do not integrate a provider until its availability/eligibility in Algeria is verified (Stripe is not suitable; evaluate Chargily Pay or manual activation).
- No broken links or dead buttons: every CTA must lead somewhere real or be clearly marked "coming soon".
- Admin authorization is enforced server-side (RLS + role checks), never only in the UI.

## Phases
1. Brand, design system, landing page, navigation  ← current
2. Dashboard + 8 tool UIs
3. Real AI integration (Supabase Edge Function, validation, rate limit)
4. Auth, usage limits, history (RLS: users only see own rows)
5. Subscriptions + admin dashboard
6. Testing, performance, deployment

## Commands
- `npm run dev` — local dev
- `npm run typecheck` — TS check
- `npm run build` — typecheck + production build
