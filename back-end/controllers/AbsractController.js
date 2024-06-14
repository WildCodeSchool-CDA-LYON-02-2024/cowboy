import AbstractDAO from '../models/AbstractDAO.js';
import Database from '../models/Database.js';

class AbstractController {
  constructor() {
    this.db = new Database();
    this.model = new AbstractDAO(this.db);
  }
  browse = (req, res) => {
    this.model
      .findAll()
      .then((rows) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export default AbstractController;
