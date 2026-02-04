# Halo Quest API

Express API for questions, health, and languages. Deployed on Vercel.

## Deploy to Vercel

1. **Root Directory (required)**  
   In the Vercel project: **Settings → General → Root Directory** set to **`api`**.  
   If this is wrong, you get 404 on every request.

2. Deploy from CLI (from repo root):
   ```bash
   vercel
   ```
   Or from this folder:
   ```bash
   cd api && vercel
   ```

3. Endpoints: `/`, `/health`, `/questions`, `/languages`.
