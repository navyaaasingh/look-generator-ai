import express from "express";
import cors from "cors";

import generateRouter from "./routes/generate";
import healthRouter from "./routes/health";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/health", healthRouter);
app.use("/api/generate-look", generateRouter);

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
