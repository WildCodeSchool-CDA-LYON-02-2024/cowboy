import Database from '../models/Database.js';
import MapDAO from '../models/MapDAO.js';
import AbstractController from './AbsractController.js';
import error from '../services/error.js';

class MapController extends AbstractController {
  constructor() {
    super();
    this.db = new Database();
    this.model = new MapDAO(this.db);
  }
  add = async (req, res) => {
    const slot = 2;

    const playerId = 1;
    console.log('2');
    await this.model
      .create(slot, playerId)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        error(err, res);
        console.error(err);
      });
  };
}

export default MapController;
