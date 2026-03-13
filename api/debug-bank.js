import { getBankStats } from "../dist/routes/debug.js";
import { applyCors } from "./_utils.js";

export default function handler(req, res) {
  if (applyCors(req, res)) return;
  return getBankStats(req, res);
}
