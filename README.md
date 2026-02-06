# Halo Quest API

Express API for questions, health, and languages. Served at **https://haloquest.app/api**.

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

Configure the app with `EXPO_PUBLIC_API_URL` or deploy the API so it is available at `https://haloquest.app/api`.

## Deploying the API (haloquest.app/api)

The API is a **Node.js app**, not static files. Uploading the `dist/` folder to a web root only serves files as text; the API will not run.

1. **Run the API on a Node host** (Railway, Render, Fly.io, or your own server):
   ```bash
   cd api && pnpm install && pnpm build && pnpm start
   ```
   This runs `node dist/server.js` and listens on `PORT` (default 4000).

2. **Point haloquest.app/api at that process** using a reverse proxy:
   - If your main site is on Nginx: proxy `/api` to `http://127.0.0.1:4000` (or the URL of your Node host).
   - If the API runs on a separate service (e.g. `https://halo-quest-api.up.railway.app`), proxy `https://haloquest.app/api` → that URL.

3. **Set CORS** if the app and API are on different origins: `CORS_ORIGIN=https://haloquest.app` (or `*` for dev).
