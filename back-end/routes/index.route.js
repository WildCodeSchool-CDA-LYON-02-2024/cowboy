import { Router } from 'express';
import user from './user.route.js';
import map from './map.route.js';

const router = Router();

// Liste des routes ...

router.use('/user', user);
router.use('/map', map);

export default router;
