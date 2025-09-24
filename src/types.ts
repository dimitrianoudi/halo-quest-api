export type Difficulty = "easy" | "moderate" | "high";

export type Answer = {
  id: string;
  text: string;
  points?: number; // optional in data; we'll normalize
};

export type QuestionSet = {
  id?: string;
  question: string;
  answers: Answer[]; // ideally 10
};
