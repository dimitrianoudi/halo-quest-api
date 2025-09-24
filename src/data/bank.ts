import type { Difficulty, QuestionSet } from "../types.js";
import { EXTRA_EASY, EXTRA_MODERATE, EXTRA_HIGH } from "./bank.extra.js";

const W = [10,9,8,7,6,5,4,3,2,1];

const BASE: Record<Difficulty, QuestionSet[]> = {
  // …your existing 6 sets per difficulty (the ones you already have) …
  // (leave them exactly as they are)
  easy: [ /* existing */ ],
  moderate: [ /* existing */ ],
  high: [ /* existing */ ],
};

export const BANK: Record<Difficulty, QuestionSet[]> = {
  easy: [...BASE.easy, ...EXTRA_EASY],
  moderate: [...BASE.moderate, ...EXTRA_MODERATE],
  high: [...BASE.high, ...EXTRA_HIGH],
};
