/**
 * Vercel serverless entry. All requests are rewritten to /api/app; we forward to Express.
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import app from "./src/server.js";

export default function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  const url = req.url ?? "/";
  const path = url.replace(/^\/api\/app/, "") || "/";
  req.url = path;
  return new Promise((resolve, reject) => {
    res.on("finish", () => resolve());
    res.on("error", reject);
    app(req, res);
  });
}
