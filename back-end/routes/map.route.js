import { Router } from 'express';
import MapController from '../controllers/MapController.js';
import generateMap from '../services/generateMap.js';
const mapController = new MapController();

const router = Router();

router.post('/generatemap', mapController.add);

export default router;
