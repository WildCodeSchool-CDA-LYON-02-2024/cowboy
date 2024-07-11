import { Router } from "express";
import buildingController from "../controllers/BuildingController.js";
const router = Router();

router.get("/:colonyId", buildingController.browse);
router.post("/:colonyId/:buildingTypeId", buildingController.upgradeLevel);

export default router;
