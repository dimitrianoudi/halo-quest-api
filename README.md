# Halo Quest API

Express API for questions, health, and languages. Served at **https://api.haloquest.app** (Hetzner VPS).

## Endpoints

- `GET /` — root
- `GET /health` — health check
- `GET /questions` — question sets (query: `difficulty`, `answers`, `lang`, `session`, `k`, `exclude`)
- `GET /languages` — supported languages

## Run locally

```bash
cd api && pnpm install && pnpm start
# API at http://localhost:4000
```

For live reload: `pnpm dev` (uses `tsx watch`).

## Deploy (e.g. Hetzner VPS)

1. Build and run the Node app (no Vercel; plain Node):
   ```bash
   pnpm install && pnpm build && pnpm start
   ```
   Listens on `PORT` (default 4000). Use a process manager (systemd, pm2) and reverse proxy (Nginx/Caddy) so `https://api.haloquest.app` points to this process.

2. Optional env: `CORS_ORIGIN=https://haloquest.app` (or `*` for dev).

The Expo app uses `EXPO_PUBLIC_API_URL` or falls back to `https://api.haloquest.app`.

## Question-only deploy

If you only changed `src/data/bank.extra.ts`, you can deploy just the built question bank file instead of re-copying the whole API.

One-off usage:

```bash
cd api
pnpm deploy:questions -- --target root@89.167.2.211
```

Reusable setup:

```bash
export HALOQUEST_API_SSH_TARGET=root@89.167.2.211
cd api
pnpm deploy:questions
```

Defaults used by the script:

- Remote app dir: `/var/www/haloquest-api`
- If the SSH target user is `root`, the deployed bank file is installed as `deploy:deploy`
- systemd service: `haloquest-api.service`
- Health check: tries `127.0.0.1:3000`, then `127.0.0.1:4000`, then `https://api.haloquest.app/health`

Optional overrides:

- `HALOQUEST_API_SSH_PORT`
- `HALOQUEST_API_REMOTE_DIR`
- `HALOQUEST_API_REMOTE_OWNER`
- `HALOQUEST_API_SERVICE`
- `HALOQUEST_API_HEALTH_URL`

Preview the commands without changing anything:

```bash
cd api
pnpm deploy:questions -- --target root@89.167.2.211 --dry-run
```
