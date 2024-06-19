import { Router } from "express";
import cowBoyController from "../controllers/cowboy/CowboyController.js";
const router = Router();

router.get("/", cowBoyController.browse);
router.get("/dispo", cowBoyController.getAlldispoCowboys);

export default router;
