import express from "express";
import cors from "cors";

import healthRouter from "./routes/health";
import generateRouter from "./routes/generate";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/health", healthRouter);
app.use("/api/generate-look", generateRouter);

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
// backend touch for streak
