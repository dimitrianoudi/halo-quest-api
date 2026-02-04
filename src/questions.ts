import type { VercelRequest, VercelResponse } from "@vercel/node";
import { BANK } from "../src/data/bank";
import { seededPermutation, sfc32FromString } from "../src/util/seed";

type Difficulty = "easy" | "moderate" | "high";
const DIFF_MULT: Record<Difficulty, number> = { easy: 1, moderate: 1.25, high: 1.5 };

function normalizeStrict(set: any, diff: Difficulty, lang: "en" | "el", limit = 10) {
  const q = set.questionByLang?.[lang] ?? set.question;
  const answers = (set.answers || []).slice(0, limit).map((a: any, idx: number) => {
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
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

    const excludeParam = String(req.query.exclude ?? "").trim();
    const exclude = new Set(excludeParam ? excludeParam.split(",").map(s => s.trim()).filter(Boolean) : []);

    let picked: any | null = null;

    if (session && Number.isFinite(kRaw as number)) {
      const deck = seededPermutation(pool.length, `${session}:${difficulty}:${lang}`);
      let idx = (kRaw as number);
      let steps = 0;
      while (steps < deck.length) {
        const set = pool[deck[idx % deck.length]];
        if (!exclude.has(set.id ?? "")) { picked = set; break; }
        idx++; steps++;
      }
      if (!picked) {
        return res.status(410).json({ error: "Deck exhausted for this session/difficulty/lang" });
      }
    } else {
      const seed = String(req.query.seed ?? Date.now());
      const rng = sfc32FromString(seed);
      picked = pool[Math.floor(rng() * pool.length)];
    }

    const payload = normalizeStrict(picked!, difficulty, lang, limit);
    const remaining = pool.length - exclude.size - 1;
    res.setHeader("X-Deck-Remaining", Math.max(remaining, 0).toString());
    res.setHeader("Cache-Control", "no-store");
    res.json(payload);
  } catch (e: any) {
    const msg = typeof e?.message === "string" ? e.message : "Server error";
    const status = /invalid: only/i.test(msg) ? 502 : 500;
    res.status(status).json({ error: msg });
  }
}
