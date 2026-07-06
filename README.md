# Little Grass Shack 🌺

Coming-soon landing page for **Little Grass Shack** — a roadside Hawaiian BBQ spot in Ribamar, Ericeira, Portugal.

Built with **Next.js 16** (App Router), **Tailwind CSS 4**, **shadcn/ui**, **Motion** (Framer Motion) and **next-intl**.

## Features

- **Coming-soon hero** with the brand logo, animated sun rays and tropical foliage.
- **Countdown to opening** — driven by the `OPEN_DATE` env variable. If it's not set, the whole countdown section is hidden.
- **Internationalisation** in 5 languages: English, Portuguese, French, German and Dutch. The active language is stored in a cookie and switched via the header dropdown (no URL prefixes).
- **Location** section with address, hours and an embedded map.
- **Contact** section with details (phone, email, socials) and a working contact form (server action + honeypot spam protection).
- Warm, outdoor-BBQ / Hawaiian aesthetic with scroll-reveal animations.

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and configure:

| Variable    | Description                                                                                                     |
| ----------- | ------------------------------------------------------------------------------------------------------------- |
| `OPEN_DATE` | ISO 8601 date/time of the grand opening (e.g. `2026-09-01T12:00:00+01:00`). Leave unset to hide the countdown. |

## Customising

- **Contact / location details** live in [`src/lib/site.ts`](src/lib/site.ts) — phone, email, socials and the Google Maps link/embed.
- **Copy & translations** live in [`messages/`](messages) (`en`, `pt`, `fr`, `de`, `nl`).
- **Brand colours & fonts** are defined in [`src/app/globals.css`](src/app/globals.css).
- **Contact form delivery**: the `submitContact` server action in [`src/app/actions.ts`](src/app/actions.ts) currently logs enquiries server-side. Wire it up to an email provider (e.g. Resend) or a datastore where the `TODO` is marked.

## Scripts

- `pnpm dev` — start the dev server
- `pnpm build` — production build
- `pnpm start` — run the production build
- `pnpm lint` — lint
