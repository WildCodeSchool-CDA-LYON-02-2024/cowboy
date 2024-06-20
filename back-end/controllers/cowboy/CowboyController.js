import CowboyModel from "../../models/CowboyDAO.js";
import { db } from "../../models/Database.js";

const Cowboy = new CowboyModel(db);
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
      console.err(err);
    });
};

export default {
  browse,
  getAlldispoCowboys,
};
