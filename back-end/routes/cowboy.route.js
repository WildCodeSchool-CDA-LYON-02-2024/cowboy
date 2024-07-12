import { Router } from "express";
import cowBoyController from "../controllers/cowboy/CowboyController.js";
import verifyToken from "../utils/verifyToken.js";
const router = Router();

router.get("/", cowBoyController.browse);
router.get("/dispo", cowBoyController.getAlldispoCowboys);
router.get("/player", verifyToken, cowBoyController.getPlayerCowboys);

export default router;
