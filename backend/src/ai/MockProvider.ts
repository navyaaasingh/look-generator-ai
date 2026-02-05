import { AIProvider } from "./AIProvider";

export class MockProvider implements AIProvider {
  async generateLook(prompt: string): Promise<string> {
    return `
Title: AI-Generated Look

Prompt Used:
${prompt}

Description:
This is a mock AI response. Real AI will replace this in Phase 2.3.
`.trim();
  }
}
