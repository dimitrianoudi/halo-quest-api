import "dotenv/config";
import express from "express";
import cors from "cors";
import { getQuestion } from "./routes/questions.js";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true }));
app.get("/questions", getQuestion); // ?difficulty=easy&seed=1-0&answers=10

const PORT = Number(process.env.PORT || 4000);
app.listen(PORT, () => {
  console.log(`Halo Quest API listening on http://localhost:${PORT}`);
});
