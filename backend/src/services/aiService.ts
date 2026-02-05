import { buildPrompt } from "../logic/promptBuilder";
import { getAIProvider } from "../ai";

export async function generateLook({ vibes }: { vibes: string[] }) {
  const prompt = buildPrompt({ vibes });

  const aiProvider = getAIProvider();
  const output = await aiProvider.generateLook(prompt);

  return {
    text: output,
  };
}
