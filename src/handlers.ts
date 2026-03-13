import type { Request, Response } from "express";
import type { Lang } from "./types.js";

export function getRoot(_req: Request, res: Response) {
  res.json({
    name: "Halo Quest API",
    endpoints: ["/health", "/questions", "/languages", "/debug/bank"],
  });
}

export function getHealth(_req: Request, res: Response) {
  res.json({ ok: true });
}

export function getLanguages(_req: Request, res: Response) {
  const data: Array<{ code: Lang; name: string; nativeName: string }> = [
    { code: "en", name: "English", nativeName: "English" },
    { code: "el", name: "Greek", nativeName: "Ελληνικά" },
  ];
  res.setHeader("Cache-Control", "public, max-age=86400");
  res.json({ languages: data });
}
