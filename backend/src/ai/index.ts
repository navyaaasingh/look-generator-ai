import "dotenv/config";

import { AIProvider } from "./AIProvider";
import { MockProvider } from "./MockProvider";
import { GeminiProvider } from "./GeminiProvider";

export function getAIProvider(): AIProvider {
  if (process.env.AI_PROVIDER === "gemini") {
    return new GeminiProvider();
  }
  return new MockProvider();
}
