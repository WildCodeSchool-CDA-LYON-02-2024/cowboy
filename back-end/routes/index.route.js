import { Router } from 'express';
import user from './user.route.js';

const router = Router();

// Liste des routes ...

router.use('/user', user);

export default router;
