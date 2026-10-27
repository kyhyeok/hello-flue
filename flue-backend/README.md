# flue-backend

A [Flue](https://flueframework.com) agent project.

## Setup

```sh
npm install
```

모델은 Cloudflare Workers AI 바인딩(`cloudflare/@cf/zai-org/glm-5.3-flash`)을 쓰므로 `.env`에 API 키가 필요 없습니다. 대신 아래 두 가지가 필요합니다.

- `npx wrangler login`으로 Cloudflare 계정에 로그인 (로컬 개발에서도 AI 바인딩은 실제 계정으로 호출됩니다)
- `glm-5.3-flash`는 유료 결제가 필요한 모델이라 Workers Paid 플랜 필요

## Develop

```sh
npm run dev
```

The Hello agent is served at `http://localhost:5173/agents/hello` — see `src/app.ts` for the route map and an example request.

## Talk to your agent

`cloudflare/...` 모델은 Cloudflare 런타임에서만 등록되므로 `npx flue run`으로는 실행되지 않습니다(`Unknown provider "cloudflare"`). `npm run dev`로 서버를 띄운 뒤 HTTP로 대화하세요.

```sh
# 메시지 보내기 (202 응답 = 접수됨)
curl -X POST http://localhost:5173/agents/hello/my-first-chat \
  -H 'content-type: application/json' \
  -d '{"kind":"user","body":"Say hello!"}'

# 대화 기록 읽기
curl "http://localhost:5173/agents/hello/my-first-chat?view=history"
```

Conversations are durable — 같은 id(`my-first-chat`)로 보내면 대화가 이어집니다.

## Deploy

```sh
npm run deploy
```

## Learn more

- [Flue docs](https://flueframework.com/docs/) — or `npx flue docs` from the terminal.
