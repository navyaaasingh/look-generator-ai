import { Router } from "express";
import { generateLookController } from "../controllers/generateController";

const router = Router();

router.post("/", generateLookController);

export default router;
