# Cloudflare Sandbox 컨테이너 이미지.
# 태그는 package.json의 @cloudflare/sandbox 버전(0.12.14)과 함께 버전 관리되므로 반드시 일치시킨다.
# 주의: npm의 @cloudflare/sandbox 1.x는 컨테이너 Sandbox가 없는 별개 API이므로 0.12.x를 유지한다.
# 베이스 이미지에는 node, git, curl, /workspace가 포함되어 있다. 필요한 도구는 RUN으로 추가한다.
FROM docker.io/cloudflare/sandbox:0.12.14
