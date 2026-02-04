/**
 * Vercel serverless entry. Rewrites send all traffic here; we forward to Express.
 * Using a non-index path so Vercel runs this as a function instead of serving the file.
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import app from "../src/server.js";

export default function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  const url = req.url ?? "/";
  // Support both Root Directory = "api" (/api/app) and repo root (/api/api/app)
const path = url.replace(/^\/api\/api\/app/, "").replace(/^\/api\/app/, "") || "/";
  req.url = path;
  return new Promise((resolve, reject) => {
    res.on("finish", () => resolve());
    res.on("error", reject);
    app(req, res);
  });
}
