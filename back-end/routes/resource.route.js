import { Router } from "express";
import resourceController from "../controllers/ResourceController.js";
import verifyToken from "../utils/verifyToken.js";
const router = Router();

router.get("/", verifyToken, resourceController.browse);

export default router;
