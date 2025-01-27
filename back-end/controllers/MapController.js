import MapDAO from '../models/MapDAO.js';
import ResourceDao from '../models/ResourceDAO.js';
import AbstractController from './AbsractController.js';
import Ressource from '../services/ressources/Ressource.js';

class MapController extends AbstractController {
  constructor() {
    super();
    this.model = new MapDAO();
    this.ressourceDAO = new ResourceDao();
    this.ressource = new Ressource();
  }

  getPlayerSlot = (req, res) => {
    const id = req.params.id;
    this.model
      .findSlotByPlayerId(id)
      .then((result) => {
        const slotId = result.map((slotObj) => slotObj.slot);
        res.send(slotId);
      })
      .catch((err) => console.error(err));
  };

  getRessource = (req, res) => {
    this.ressourceDAO
      .findAll()
      .then((rows) => {
        this.ressource.parseAll(rows);
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export default MapController;
