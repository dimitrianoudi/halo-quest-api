/**
 * Vercel serverless entry. /api and /api/:path* rewrite here; we forward path + query to Express.
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import app from "./src/server.js";

function pathFromQuery(query: VercelRequest["query"]): string {
  const p = query?.path;
  if (p == null) return "/";
  const segs = Array.isArray(p) ? p : [p];
  const path = "/" + segs.filter(Boolean).join("/");
  return path || "/";
}

function queryWithoutPath(query: VercelRequest["query"]): string {
  if (!query || typeof query !== "object") return "";
  const q = new URLSearchParams();
  for (const [k, v] of Object.entries(query)) {
    if (k === "path") continue;
    if (Array.isArray(v)) v.forEach((x) => q.append(k, x));
    else if (v != null) q.set(k, String(v));
  }
  const s = q.toString();
  return s ? "?" + s : "";
}

export default function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  const path = pathFromQuery(req.query);
  const qs = queryWithoutPath(req.query);
  req.url = path + qs;
  return new Promise((resolve, reject) => {
    res.on("finish", () => resolve());
    res.on("error", reject);
    app(req, res);
  });
}
