# Halo Quest API

Express API for questions, health, and languages. Deployed on Vercel.

## Deploy to Vercel

1. **Root Directory**  
   - **Repo root** (default): leave empty. `vercel.json` rewrites to `/api/api/app`.
   - **API only**: set to **`api`** and change the rewrite in `vercel.json` to `"destination": "/api/app"`.

2. Deploy from CLI (from repo root):
   ```bash
   vercel
   ```
   Or from this folder:
   ```bash
   cd api && vercel
   ```

3. Endpoints: `/`, `/health`, `/questions`, `/languages`.
