// backend/src/services/aiService.ts

import { buildPrompt } from "../logic/promptBuilder";

type GenerateLookInput = {
  vibes: string[];
};

type AIResponse = {
  text: string;
};

export async function generateLook(
  input: GenerateLookInput
): Promise<AIResponse> {
  const prompt = buildPrompt(input);

  // TEMP MOCK (Phase 2)
  const mockAIText = `
Title: Urban Minimal Street Fit

Description:
A clean, modern streetwear look balancing minimal silhouettes with subtle techwear influence.

Clothing Items:
- Oversized black hoodie
- Straight-leg cargo pants
- White minimalist sneakers
- Crossbody utility bag
- Silver chain accessory
`;

  return {
    text: mockAIText.trim(),
  };
}
