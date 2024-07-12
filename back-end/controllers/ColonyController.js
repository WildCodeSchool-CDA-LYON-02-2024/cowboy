import ColonyDAO from '../models/ColonyDAO.js';
import Colony from '../services/colony/Colony.js';

class ColonyController extends AbortController {
  constructor() {
    super();
    this.model = new ColonyDAO();
    this.service = new Colony();
  }
  add = (req, res) => {
    const id = req.params.id;

    const payload = req.body;

    const colonyId = payload.colonyId;
    const slotId = payload.slotId.id;

    this.service
      .addColony(id, colonyId, slotId, res)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
        console.error(err);
      });
  };
}

export default ColonyController;
