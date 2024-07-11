import { Router } from 'express';
import resourceController from '../controllers/ResourceController.js';
import ColonyController from '../controllers/ColonyController.js';
import verifyToken from '../utils/verifyToken.js';
const colonyController = new ColonyController();
const router = Router();

// router.get('/', resourceController.browse);
router.get('/', verifyToken, resourceController.browse);
router.get('/slot/:id', resourceController.find);
router.put('/player/:id/take-resources', resourceController.update);
router.put('/player/:id/add-colony', colonyController.add);
router.get('/SSE', verifyToken, resourceController.browseSSE);
router.put('/:colonyId', resourceController.updateResources);

export default router;
