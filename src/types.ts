export type Lang = "en" | "el";
export type Difficulty = "easy" | "moderate" | "high";

export type Answer = {
  id: string;
  // Localized text
  text?: string;          // (legacy single-lang)
  textByLang?: { en: string; el: string };
  points?: number;
};

export type QuestionSet = {
  id?: string;
  // Localized question
  question?: string;      // (legacy single-lang)
  questionByLang?: { en: string; el: string };
  answers: Answer[];
};
