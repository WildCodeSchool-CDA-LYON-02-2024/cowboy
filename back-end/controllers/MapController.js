import Database from '../models/Database.js';
import MapDAO from '../models/MapDAO.js';
import AbstractController from './AbsractController.js';

class MapController extends AbstractController {
  constructor() {
    super();
    this.db = new Database();
    this.model = new MapDAO(this.db);
  }
}

export default MapController;
