import { Router } from "express";
import UserController from "../controllers/UserController.js";
import { verifyRegister, verifyLogin } from "../middlewares/userMiddlware.js";
import { verifyPassword } from "../utils/auth.js";

const router = Router();
const userController = new UserController();

router.get("/", userController.browse);
router.post("/register", verifyRegister, userController.add);
router.post(
  "/login",
  verifyLogin,
  userController.findByMailForLogin,
  verifyPassword
);

export default router;
