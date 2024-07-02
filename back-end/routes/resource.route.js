import { Router } from 'express';
import resourceController from '../controllers/ResourceController.js';
const router = Router();

router.get('/', resourceController.browse);
router.get('/slot/:id', resourceController.find);
router.put('/player/:id/take-resources', resourceController.update);

export default router;
