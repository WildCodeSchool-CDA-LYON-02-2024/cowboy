import { Router } from 'express';
import UserController from '../controllers/UserController.js';

const router = Router();
const userController = new UserController();

router.get('/', userController.browse);

export default router;
