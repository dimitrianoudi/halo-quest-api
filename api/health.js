import { getHealth } from "../dist/handlers.js";
import { applyCors } from "./_utils.js";

export default function handler(req, res) {
  if (applyCors(req, res)) return;
  return getHealth(req, res);
}
