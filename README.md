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
