import { Router } from 'express';
import MapController from '../controllers/MapController.js';
import generateMap from '../services/generateMap.js';
const mapController = new MapController();
const map = new generateMap();

const router = Router();

router.post('/generatemap', map.generateMap);

export default router;
