import { Request, Response } from "express";

export function healthController(_req: Request, res: Response) {
  res.status(200).json({
    status: "ok",
    service: "ai-look-generator-backend",
    timestamp: new Date().toISOString(),
  });
}
