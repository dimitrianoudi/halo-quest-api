import type { Request, Response } from "express";
import { BANK } from "../data/bank.js";
import type { Difficulty, QuestionSet } from "../types.js";

const DIFFS: Difficulty[] = ["easy", "moderate", "high"];

function isValidForLang(
  set: QuestionSet,
  lang: "en" | "el",
  limit = 10
): { ok: boolean; reason?: string } {
  const q = set.questionByLang?.[lang] ?? set.question;
  if (!q) return { ok: false, reason: "missing question text for lang" };
  const ans = set.answers || [];
  if (ans.length < limit) return { ok: false, reason: `only ${ans.length}/${limit} answers` };
  for (let i = 0; i < limit; i++) {
    const a = ans[i];
    const txt = a?.textByLang?.[lang] ?? a?.text;
    if (!txt) return { ok: false, reason: `answer#${i + 1} missing text for lang` };
  }
  return { ok: true };
}

export function getBankStats(req: Request, res: Response) {
  const lang = (String(req.query.lang ?? "en").toLowerCase() === "el" ? "el" : "en") as "en" | "el";
  const limit = Math.max(1, Math.min(20, parseInt(String(req.query.answers ?? "10"), 10) || 10));

  const out = DIFFS.map((d) => {
    const pool = BANK[d] || [];
    const valid = pool.filter((s) => isValidForLang(s, lang, limit).ok);
    const invalid = pool
      .filter((s) => !isValidForLang(s, lang, limit).ok)
      .map((s) => ({ id: s.id, reason: isValidForLang(s, lang, limit).reason }));

    return {
      difficulty: d,
      total: pool.length,
      valid: valid.length,
      invalid: invalid.length,
      sampleValidIds: valid.slice(0, 10).map((s) => s.id),
      sampleInvalid: invalid.slice(0, 10),
    };
  });

  res.json({ lang, answers: limit, diffs: out });
}
