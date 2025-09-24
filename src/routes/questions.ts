import type { Request, Response } from "express";
import { BANK } from "../data/bank.js";
import type { Difficulty, QuestionSet } from "../types.js";
import { seededPermutation, sfc32FromString } from "../util/seed.js";

const DIFF_MULT: Record<Difficulty, number> = { easy: 1, moderate: 1.25, high: 1.5 };

function normalizeStrict(set: QuestionSet, diff: Difficulty, lang: "en" | "el", limit = 10) {
  const q = set.questionByLang?.[lang] ?? set.question;
  const answers = (set.answers || []).slice(0, limit).map((a, idx) => {
    const base = typeof a.points === "number" ? a.points : (limit - idx);
    const points = Math.max(1, Math.round(base * (DIFF_MULT[diff] ?? 1)));
    const text = a.textByLang?.[lang] ?? a.text;
    return { id: String(a.id ?? idx + 1), text, points };
  });
  if (!q || answers.length !== limit) {
    throw new Error(`Set ${set.id ?? "?"} invalid: only ${answers.length}/${limit} answers`);
  }
  return { id: set.id, question: q, answers };
}

export function getQuestion(req: Request, res: Response) {
  try {
    const qDiff = String(req.query.difficulty ?? "easy").toLowerCase();
    const difficulty: Difficulty =
      (["easy", "moderate", "high"] as const).includes(qDiff as any) ? (qDiff as Difficulty) : "easy";

    const langParam = String(req.query.lang ?? "en").toLowerCase();
    const lang: "en" | "el" = (["en", "el"] as const).includes(langParam as any) ? (langParam as any) : "en";

    const limit = Math.max(1, Math.min(20, parseInt(String(req.query.answers ?? "10"), 10) || 10));

    const pool = BANK[difficulty];
    if (!pool?.length) return res.status(404).json({ error: `No questions for "${difficulty}"` });

    const session = req.query.session ? String(req.query.session) : undefined;
    const kRaw = req.query.k != null ? parseInt(String(req.query.k), 10) : undefined;

    // Parse exclude list (IDs)
    const excludeParam = String(req.query.exclude ?? "").trim();
    const exclude = new Set(
      excludeParam ? excludeParam.split(",").map(s => s.trim()).filter(Boolean) : [],
    );

    let picked: QuestionSet | null = null;

    if (session && Number.isFinite(kRaw as number)) {
      // Build the session deck and scan forward from k to find first unused
      const deck = seededPermutation(pool.length, `${session}:${difficulty}:${lang}`);
      let idx = (kRaw as number);
      let steps = 0;
      while (steps < deck.length) {
        const set = pool[deck[idx % deck.length]];
        if (!exclude.has(set.id ?? "")) { picked = set; break; }
        idx++; steps++;
      }
      if (!picked) {
        // All used
        return res.status(410).json({ error: "Deck exhausted for this session/difficulty/lang" });
      }
    } else {
      // Fallback for older clients (no session/k): random pick
      const seed = String(req.query.seed ?? Date.now());
      const rng = sfc32FromString(seed);
      picked = pool[Math.floor(rng() * pool.length)];
    }

    const payload = normalizeStrict(picked!, difficulty, lang, limit);
    // Return a hint of how many remain (excluding current pick)
    const remaining = pool.length - exclude.size - 1;
    res.setHeader("X-Deck-Remaining", Math.max(remaining, 0).toString());
    res.setHeader("Cache-Control", "no-store");
    return res.json(payload);
  } catch (e: any) {
    const msg = typeof e?.message === "string" ? e.message : "Server error";
    const status = /invalid: only/i.test(msg) ? 502 : 500;
    return res.status(status).json({ error: msg });
  }
}
