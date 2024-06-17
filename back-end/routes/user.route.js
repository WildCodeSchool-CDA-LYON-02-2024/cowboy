import { Router } from 'express';
import UserController from '../controllers/UserController.js';
import { verifyPassword } from '../utils/auth.js';

const router = Router();
const userController = new UserController();

router.get('/', userController.browse);
router.post('/register', userController.add);
router.post('/login', userController.findByMailForLogin, verifyPassword);

export default router;
