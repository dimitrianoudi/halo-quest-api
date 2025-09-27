// api/src/routes/questions.ts
import type { Request, Response } from "express";
import { BANK } from "../data/bank.js";
import type { Difficulty, QuestionSet } from "../types.js";
import { seededPermutation, sfc32FromString } from "../util/seed.js";

const DIFF_MULT: Record<Difficulty, number> = { easy: 1, moderate: 1.25, high: 1.5 };

function normalize(
  set: QuestionSet,
  diff: Difficulty,
  lang: "en" | "el",
  limit = 10
) {
  const q = set.questionByLang?.[lang] ?? set.question;
  const answers = (set.answers || []).slice(0, limit).map((a, idx) => {
    const base = typeof a.points === "number" ? a.points : (limit - idx);
    const points = Math.max(1, Math.round(base * (DIFF_MULT[diff] ?? 1)));
    const text = a.textByLang?.[lang] ?? a.text;
    return { id: String(a.id ?? idx + 1), text, points };
  });
  if (!q || answers.length !== limit || answers.some(a => !a.text)) {
    throw new Error(`invalid set: ${set.id ?? "?"}`);
  }
  return { id: set.id, question: q, answers };
}

function tryNormalize(set: QuestionSet, diff: Difficulty, lang: "en" | "el", limit = 10) {
  try { return normalize(set, diff, lang, limit); } catch { return null; }
}

export function getQuestion(req: Request, res: Response) {
  try {
    const qDiff = String(req.query.difficulty ?? "easy").toLowerCase();
    const difficulty: Difficulty =
      (["easy", "moderate", "high"] as const).includes(qDiff as any) ? (qDiff as Difficulty) : "easy";

    const langParam = String(req.query.lang ?? "en").toLowerCase();
    const lang: "en" | "el" = (["en", "el"] as const).includes(langParam as any) ? (langParam as any) : "en";

    const limit = Math.max(1, Math.min(20, parseInt(String(req.query.answers ?? "10"), 10) || 10));

    const rawPool = BANK[difficulty] || [];
    if (!rawPool.length) return res.status(404).json({ error: `No questions for "${difficulty}"` });

    // Client-reported excludes (IDs already used in this session)
    const excludeParam = String(req.query.exclude ?? "").trim();
    const exclude = new Set(excludeParam ? excludeParam.split(",").map(s => s.trim()).filter(Boolean) : []);

    // filter only valid candidates for this lang/limit
    const candidates = rawPool
      .map(s => ({ set: s, norm: tryNormalize(s, difficulty, lang, limit) }))
      .filter(x => !!x.norm) as { set: QuestionSet; norm: ReturnType<typeof normalize> }[];

    // Emit useful headers for debugging
    res.setHeader("X-Deck-Candidates", String(candidates.length));
    res.setHeader("X-Deck-Excluded", String(exclude.size));

    if (!candidates.length) {
      return res.status(404).json({ error: `No valid (10-answer, ${lang}) sets for "${difficulty}"` });
    }

    const session = req.query.session ? String(req.query.session) : undefined;
    const kRaw = req.query.k != null ? parseInt(String(req.query.k), 10) : undefined;

    // Optional fallback to random if deterministic pick fails
    const fallback = String(req.query.fallback ?? "").toLowerCase() === "random";

    if (session && Number.isFinite(kRaw as number)) {
      const deck = seededPermutation(candidates.length, `${session}:${difficulty}:${lang}`);
      let idx = (kRaw as number);
      let steps = 0;

      while (steps < deck.length) {
        const pick = candidates[deck[idx % deck.length]];
        if (!exclude.has(pick.set.id ?? "")) {
          const remaining = Math.max(
            candidates.length - exclude.size - 1 /* current */,
            0
          );
          res.setHeader("X-Deck-Remaining", String(remaining));
          res.setHeader("Cache-Control", "no-store");
          return res.json(pick.norm);
        }
        idx++; steps++;
      }

      if (fallback) {
        // break determinism to keep the game going
        const avail = candidates.filter(c => !exclude.has(c.set.id ?? ""));
        if (avail.length) {
          const seed = String(req.query.seed ?? Date.now());
          const rng = sfc32FromString(seed);
          const pick = avail[Math.floor(rng() * avail.length)];
          const remaining = Math.max(avail.length - 1, 0);
          res.setHeader("X-Deck-Remaining", String(remaining));
          res.setHeader("Cache-Control", "no-store");
          res.setHeader("X-Deck-Fallback", "random");
          return res.json(pick.norm);
        }
      }

      return res.status(410).json({ error: "Deck exhausted for this session/difficulty/lang" });
    }

    // Legacy/random path
    const seed = String(req.query.seed ?? Date.now());
    const rng = sfc32FromString(seed);
    for (let i = 0; i < candidates.length; i++) {
      const pick = candidates[Math.floor(rng() * candidates.length)];
      if (!exclude.has(pick.set.id ?? "")) {
        res.setHeader("X-Deck-Remaining", String(Math.max(candidates.length - exclude.size - 1, 0)));
        res.setHeader("Cache-Control", "no-store");
        return res.json(pick.norm);
      }
    }

    return res.status(410).json({ error: "Deck exhausted for this session/difficulty/lang" });
  } catch (e: any) {
    const msg = typeof e?.message === "string" ? e.message : "Server error";
    return res.status(500).json({ error: msg });
  }
}
