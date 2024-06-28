import AbstractDAO from '../models/AbstractDAO.js';

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
