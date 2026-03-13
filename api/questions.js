import { getQuestion } from "../dist/routes/questions.js";
import { applyCors } from "./_utils.js";

export default function handler(req, res) {
  if (applyCors(req, res)) return;
  return getQuestion(req, res);
}
