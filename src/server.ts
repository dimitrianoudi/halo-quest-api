import "dotenv/config";
import app from "./app.js";

const PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Halo Quest API listening on http://0.0.0.0:${PORT}`);
});