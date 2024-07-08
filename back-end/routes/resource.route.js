import { Router } from "express";
import resourceController from "../controllers/ResourceController.js";
const router = Router();

router.get("/", resourceController.browse);
router.put("/:colonyId", resourceController.updateResources);

export default router;
