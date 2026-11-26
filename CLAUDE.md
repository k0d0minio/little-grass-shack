# Little Grass Shack — little-grass-shack

The coming-soon landing page of Little Grass Shack, a roadside Hawaiian BBQ in Ribamar,
Ericeira, Portugal. A Next.js 16 app (App Router) in 5 languages, with no database. The
contact form logs the enquiries on the server. It sends no mail yet.

The work pipeline is the BAXTER blueprint (`.icm/_system/`, version in
`.icm/_system/VERSION`, answers in `.icm/.copier-answers.yml`). This file is identity and
routing only. The rules live once, in the files it points at.

@AGENTS.md

## Routing

@.icm/_system/ROUTER.md

The router has the commands, the stages and the lanes. A ticket is a markdown stub in
`.icm/intake/`. The files below belong to this repo.

| You are asked to | Go to |
|---|---|
| read the stack and the conventions of the code | `.icm/project-rules.md` |
| read where the build runs | `.icm/environments.md`, the one home of the addresses |
| change pages or layout | `src/app/` and `src/components/` |
| change the contact or location details | `src/lib/site.ts` |
| change copy in one language | `messages/<locale>.json`, and the same key in the other 4 files |
| change the locales or the language switch | `src/i18n/` (`config.ts`, `request.ts`) |
| change colours or fonts | `src/app/globals.css` |
| do a setup act in Vercel or GitHub | `.icm/setup/`: one file for each act. A person ticks its boxes |
| change what CI checks | the blueprint. `ci.yml` and `icm.yml` come from it |
