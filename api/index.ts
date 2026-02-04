/**
 * Explicit Vercel serverless entry. All requests are rewritten to /api;
 * we strip the /api prefix so Express sees the original path (/, /health, etc.).
 * Must wait for Express to finish so Vercel doesn't send a second response (download/redirect).
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import app from "../src/server.js";

export default function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  const url = req.url ?? "/";
  const path = url.replace(/^\/api/, "") || "/";
  req.url = path;
  return new Promise((resolve, reject) => {
    res.on("finish", () => resolve());
    res.on("error", reject);
    app(req, res);
  });
}
