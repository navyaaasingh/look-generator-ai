import { MockProvider } from "./MockProvider";
import { AIProvider } from "./AIProvider";

export function getAIProvider(): AIProvider {
  // Phase 2.3: switch based on ENV
  return new MockProvider();
}
