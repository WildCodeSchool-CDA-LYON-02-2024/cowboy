import { Router } from "express";
import buildingController from "../controllers/BuildingController.js";
const router = Router();

router.get("/:colonyId", buildingController.browse);

export default router;
