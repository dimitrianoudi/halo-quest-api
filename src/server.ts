import "dotenv/config";
import express from "express";
import cors from "cors";
import { getQuestion } from "./routes/questions.js";
import type { Lang } from "./types.js";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true }));
app.get("/questions", getQuestion); // ?difficulty=easy&seed=1-0&answers=10

app.get("/languages", (_req, res) => {
  const data: Array<{ code: Lang; name: string; nativeName: string }> = [
    { code: "en", name: "English", nativeName: "English" },
    { code: "el", name: "Greek",   nativeName: "Ελληνικά" },
  ];
  res.setHeader("Cache-Control", "public, max-age=86400");
  res.json({ languages: data });
});



// Export for Vercel serverless (Express is used as a single function)
export default app;

const PORT = process.env.PORT || 4000;
// Only listen when running locally (not on Vercel)
if (process.env.VERCEL !== "1") {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Halo Quest API listening on http://localhost:${PORT}`);
  });
}