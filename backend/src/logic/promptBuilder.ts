// backend/src/logic/promptBuilder.ts

type PromptInput = {
  vibes: string[];
};

/**
 * Builds a deterministic, structured prompt for a fashion-stylist AI.
 * This function contains NO side effects and NO external dependencies.
 * It can be reused across OpenAI, Hugging Face, or any future AI provider.
 */
export function buildPrompt(input: PromptInput): string {
  const { vibes } = input;

  // Basic validation to avoid garbage prompts
  if (!Array.isArray(vibes) || vibes.length === 0) {
    throw new Error("PromptBuilder: vibes array must not be empty.");
  }

  const formattedVibes = vibes.join(", ");

  /**
   * Prompt design principles used here:
   * 1. Clear role definition (fashion stylist AI)
   * 2. Explicit user intent (vibes)
   * 3. Strict output format to reduce hallucination
   * 4. Human-readable but machine-consumable structure
   */
  return `
You are a professional fashion stylist AI with expertise in modern and contemporary fashion.

Your task is to create a complete outfit inspired by the following fashion vibes:
${formattedVibes}

Guidelines:
- The outfit should feel cohesive and intentional.
- Avoid overly generic suggestions.
- Keep the description concise and stylish.

Return the result in the following structured format:

Title:
<Short, creative name for the outfit>

Description:
<1–2 sentence description of the overall look and aesthetic>

Clothing Items:
- <Item 1>
- <Item 2>
- <Item 3>
- <Item 4>
- <Item 5 (optional)>
- <Item 6 (optional)>

Color Palette (optional):
- <Primary color>
- <Secondary color>
- <Accent color>

Style Tags (optional):
- <Tag 1>
- <Tag 2>
- <Tag 3>
`.trim();
}
