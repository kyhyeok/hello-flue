// Worker-level Cloudflare code lives here; HTTP routing stays in src/app.ts.
//
//   - Named exports become top-level Worker exports — e.g. application-owned
//     Durable Object classes (declare their bindings in wrangler.jsonc).
//   - An optional default export adds non-HTTP handlers: scheduled (cron),
//     queue consumers, inbound email, etc. (never `fetch`).
//
// https://flueframework.com/docs/guide/cloudflare-target/#extending-cloudflarets-entrypoint

// Cloudflare Sandbox(컨테이너) Durable Object 클래스.
// 바인딩·migration·컨테이너 이미지는 wrangler.jsonc에 선언되어 있다.
export { Sandbox } from '@cloudflare/sandbox';