import MapDAO from '../models/MapDAO.js';
import AbstractController from './AbsractController.js';

class MapController extends AbstractController {
  constructor() {
    super();
    this.model = new MapDAO();
  }
}

export default MapController;
