import { GoogleGenerativeAI } from "@google/generative-ai";
import { AIProvider } from "./AIProvider";
import { GeneratedLook } from "../types/look";

export class GeminiProvider implements AIProvider {
  private model;

  constructor() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    this.model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  }

  async generateLook(prompt: string): Promise<string> {
    const result = await this.model.generateContent(prompt);
    const text = result.response.text();

    const look: GeneratedLook = {
      title: "AI Generated Look",
      top: text.split("\n")[0] || "Styled top",
      bottom: "Relaxed trousers",
      footwear: "Modern sneakers",
      accessories: ["Minimal watch"],
      vibe: []
    };

    return JSON.stringify(look);
  }
}
