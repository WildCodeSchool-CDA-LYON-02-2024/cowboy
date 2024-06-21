import { Router } from "express";
import user from "./user.route.js";
import map from "./map.route.js"
import cowboy from "./cowboy.route.js";
import hiring from "./hiring.route.js"

const router = Router();

// Liste des routes ...

router.use('/user', user);
router.use('/map', map);
router.use("/user", user);
router.use("/cowboy", cowboy);
router.use("/hiring",hiring)
export default router;
