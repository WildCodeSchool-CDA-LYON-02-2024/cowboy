import AbstractDAO from '../models/AbstractDAO.js';
//import { db } from '../models/Database.js';

class AbstractController {
  constructor() {
    this.model = new AbstractDAO();
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
