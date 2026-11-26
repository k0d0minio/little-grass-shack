# Project rules

This file belongs to the repo. Write the rules that are true for this repo only: the stack,
the conventions of the code, the names of things. Build and the lanes read it.

Keep it short. A rule that is true for all repos belongs in the blueprint, not here.

- Stack: one Next.js 16 app (App Router, TypeScript) with its source in `src/` (alias
  `@/*`). Tailwind CSS v4, shadcn/ui, Motion and `next-intl`. pnpm 10 (`packageManager` in `package.json`), with `pnpm-lock.yaml`.
  Node from `.nvmrc`.
- This Next.js has breaking changes against older versions. Read the guide in
  `node_modules/next/dist/docs/` before you write code (`AGENTS.md`).
- The scripts `lint` (ESLint), `typecheck` (`tsc --noEmit`) and `test` (Vitest, `tests/`)
  are the code checks of the workflow `ci`. ESLint and `tsc` do not check `.icm/` and
  `.claude/`.
- 5 locales: `en` (the default), `pt`, `fr`, `de`, `nl`. A cookie keeps the locale. The URL
  has no locale prefix. A key added to one file of `messages/` is added to all 5 in the same
  change. A missing key is a defect, not a fallback.
- `OPEN_DATE` (ISO 8601) sets the countdown to the opening. With no `OPEN_DATE`, the page
  shows no countdown. The env names are in `.env.example`.
- The contact details in `src/lib/site.ts` are placeholders until the client gives the real
  values.
- The server action `submitContact` (`src/app/actions.ts`) only logs an enquiry. Mail
  delivery is not done.
