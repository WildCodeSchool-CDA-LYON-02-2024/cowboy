import { Router } from "express";
import resourceController from "../controllers/ResourceController.js";
import verifyToken from "../utils/verifyToken.js";
const router = Router();

router.get("/", verifyToken, resourceController.browse);
router.get("/SSE", verifyToken, resourceController.browseSSE);
router.put("/:colonyId", resourceController.updateResources);
// console.log(router.get("/", verifyToken, resourceController.browse), "ROUTE");
export default router;
