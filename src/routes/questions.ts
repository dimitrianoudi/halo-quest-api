import type { Request, Response } from "express";
import { BANK } from "../data/bank.js";
import type { Difficulty, QuestionSet } from "../types.js";
import { seededPick } from "../util/seed.js";

const DIFF_MULT: Record<Difficulty, number> = { easy: 1, moderate: 1.25, high: 1.5 };

function normalize(set: QuestionSet, diff: Difficulty, limit = 10): QuestionSet {
  // ensure points + exactly `limit` answers
  const answers = (set.answers || []).slice(0, limit).map((a, idx) => {
    const base = typeof a.points === "number" ? a.points : (limit - idx);
    const points = Math.max(1, Math.round(base * (DIFF_MULT[diff] ?? 1)));
    return { id: String(a.id ?? idx + 1), text: a.text, points };
  });
  if (!answers.length) throw new Error("No answers in set");
  return { question: set.question, answers };
}

export function getQuestion(req: Request, res: Response) {
  try {
    const difficulty = String(req.query.difficulty || "easy") as Difficulty;
    const seed = String(req.query.seed || Date.now());
    const limit = Math.max(1, Math.min(20, parseInt(String(req.query.answers || "10"), 10)));

    const pool = BANK[difficulty];
    if (!pool?.length) return res.status(404).json({ error: "No questions for difficulty" });

    const picked = seededPick(pool, seed);
    const payload = normalize(picked, difficulty, limit);
    return res.json(payload);
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || "Server error" });
  }
}
