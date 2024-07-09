import { Router } from "express";
import hiringController from "../controllers/cowboy/HiringController.js";
import verifyToken from "../utils/verifyToken.js";
const router = Router();

router.post("/:id",verifyToken, hiringController.hiringCowboy);

export default router;
