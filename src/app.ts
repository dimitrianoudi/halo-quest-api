import express from "express";
import cors from "cors";
import { getRoot, getHealth, getLanguages } from "./handlers.js";
import { getQuestion } from "./routes/questions.js";
import { getBankStats } from "./routes/debug.js";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json());

app.get("/", getRoot);
app.get("/health", getHealth);
app.get("/questions", getQuestion);
app.get("/languages", getLanguages);
app.get("/debug/bank", getBankStats);

export default app;
