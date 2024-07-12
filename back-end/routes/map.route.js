import { Router } from 'express';
import MapController from '../controllers/MapController.js';
const mapController = new MapController();

const router = Router();

router.get('/', mapController.getRessource);
router.get('/slot', mapController.browse);
router.get('/slot/:id', mapController.getPlayerSlot);

export default router;
