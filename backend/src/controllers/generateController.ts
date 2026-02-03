import { Request, Response } from "express";
import { generateLook } from "../services/aiService";

export async function generateLookController(
  req: Request,
  res: Response
) {
  try {
    const { vibes } = req.body;

    if (!Array.isArray(vibes) || vibes.length === 0) {
      return res.status(400).json({
        error: "vibes must be a non-empty array",
      });
    }

    const result = await generateLook({ vibes });

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to generate look",
    });
  }
}
