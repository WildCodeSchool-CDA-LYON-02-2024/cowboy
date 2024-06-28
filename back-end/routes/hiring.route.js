import { Router } from "express";
import hiringController from "../controllers/cowboy/HiringController.js";

const router = Router();

router.post("/:id", hiringController.hiringCowboy);

export default router;
