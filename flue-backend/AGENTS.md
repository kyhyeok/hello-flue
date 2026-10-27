# AGENTS.md

This is a [Flue](https://flueframework.com) project: agents are TypeScript functions.

## Layout

- `src/agents/` — agent modules. A module whose first line is the `'use agent'` directive exports agents: every exported capitalized function is one, and the function name is its durable identity.
- `src/app.ts` — the route map; every route is mounted here explicitly.
- `src/cloudflare.ts` — Worker-level exports and non-HTTP handlers.
- `wrangler.jsonc` — Worker config; every agent needs a Durable Object migration entry.

## Commands

- `npx flue run src/agents/cs.ts --message "Hi"` — run an agent locally, no server. 단, 현재 모델(`cloudflare/...`)은 Cloudflare 런타임 전용이라 `flue run`에서는 `Unknown provider "cloudflare"`로 실패한다. `npm run dev` + HTTP로 테스트할 것.
- `npm run check:types` — typecheck.
- `npm run dev` — start the dev server.
- `npm run deploy` — build and deploy the Worker.
- `npx flue docs search <query>` — search the Flue docs from the terminal (then `flue docs read <path>`).
- `npx flue add` — list blueprints for adding channels, sandboxes, and databases.
