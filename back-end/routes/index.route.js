import { Router } from "express";
import cowboy from "./cowboy.route.js";
import hiring from "./hiring.route.js";
import map from "./map.route.js";
import resource from "./resource.route.js";
import user from "./user.route.js";
import building from "./building.route.js";

const router = Router();

// Liste des routes ...

router.use("/user", user);
router.use("/map", map);
router.use("/user", user);
router.use("/cowboy", cowboy);
router.use("/hiring", hiring);
router.use("/resource", resource);
router.use("/building", building);
export default router;
