import { Router } from 'express';
import MapController from '../controllers/MapController.js';
const mapController = new MapController();

const router = Router();

router.get('/', mapController.getRessource);

export default router;
