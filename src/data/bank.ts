import type { Difficulty, QuestionSet } from "../types.js";
import { EXTRA_EASY, EXTRA_MODERATE, EXTRA_HIGH } from "./bank.extra";

const W = [10,9,8,7,6,5,4,3,2,1];

const BASE: Record<Difficulty, QuestionSet[]> = {
  easy: [],
  moderate: [],
  high: [],
};

export const BANK: Record<Difficulty, QuestionSet[]> = {
  easy:     [...BASE.easy, ...EXTRA_EASY],
  moderate: [...BASE.moderate, ...EXTRA_MODERATE],
  high:     [...BASE.high, ...EXTRA_HIGH],
};