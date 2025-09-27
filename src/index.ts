import express from "express";
import cors from "cors";
import { getQuestion } from "./routes/questions.js";
import { getBankStats } from "./routes/debug.js";

const app = express();
app.use(cors());
app.get("/questions", getQuestion);
app.get("/debug/bank", getBankStats);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API listening on ${PORT}`));
