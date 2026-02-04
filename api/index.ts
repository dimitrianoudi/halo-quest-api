/**
 * Explicit Vercel serverless entry. All requests are rewritten to /api;
 * we strip the /api prefix so Express sees the original path (/, /health, etc.).
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import app from "../src/server.js";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const url = req.url ?? "/";
  const path = url.replace(/^\/api/, "") || "/";
  req.url = path;
  return app(req, res);
}
