import CowboyModel from '../../models/CowboyDAO.js';

const Cowboy = new CowboyModel();
/* get all cowboys */

const browse = (req, res) => {
  Cowboy.readAll()
    .then((cowboy) => {
      res.json(cowboy);
    })
    .catch((err) => {
      console.error(err);
    });
};

/* get all dispo cowboys  */

const getAlldispoCowboys = (req, res) => {
  Cowboy.readAllDispo()
    .then((Cowboy) => {
      res.json(Cowboy);
    })
    .catch((err) => {
      console.log("erreur controll")
      return res.status(401).json(err);
 
    });
};

export default {
  browse,
  getAlldispoCowboys,
};
