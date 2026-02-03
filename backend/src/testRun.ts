// TEMP: Local test runner for Phase 2
// Will be removed once Express API is added

import { generateLook } from "./services/aiService";

async function run() {
  const result = await generateLook({
    vibes: ["Streetwear", "Minimal", "Techwear"],
  });

  console.log("\n=== AI OUTPUT ===\n");
  console.log(result.text);
}

run();
