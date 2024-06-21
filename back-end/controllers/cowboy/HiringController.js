import CowboyModel from "../../models/CowboyDAO.js";
import PlayerModel from "../../models/UserDAO.js";
import ResourceModel from "../../models/ResourceDAO.js";
import jwt from "jsonwebtoken";

const Cowboy = new CowboyModel();
const Player = new PlayerModel();
const Resource = new ResourceModel();

const hiringCowboy = (req, res) => {

  const cowboyId = parseInt(req.params.id);
  const token = req.headers.authorization.split(" ")[1];

  let loggedPlayerId;

  try {
    const decodedToken = jwt.verify(token, "secret"); 
    loggedPlayerId = decodedToken.payload.sub.id;
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }

  Player.read(loggedPlayerId) 
    .then((player) => {
      if (!player) {
        throw { status: 404, message: "Le joueur n'exist pas " };
      }

      return Resource.getGold(loggedPlayerId);
    })
    // Vérifier si le joueur a assez d'or
    .then((resources) => {
      if (resources.total_of_gold < 10) {
        throw { status: 403, message: "Pas assez d'or ;(" };
      }
      return Cowboy.readAllDispo();
    })
    // Trouve un cowboy dans les listes disponibles
    .then((dispo) => {
      const cowboy = dispo.find((c) => c.id === cowboyId);
      if (!cowboy) {
        throw { status: 404, message: "le cowboy n'est pas disponible" };
      }
      // Je passe le modèle cowboy, l'ID du joueur et l'ID du cowboy que j'ai récupérés depuis le req.params.
      return Cowboy.hiringCowboy(loggedPlayerId, cowboyId);
    })
    .then(() => {
      res.status(201).json({ message: "vous avez recruter un cowboy " });
    })
    .catch((error) => {
      console.error(error);
      const status = error.status || 500;
      const message = error.message || "Internal server error";
      res.status(status).json({ message });
    });
};

export default { hiringCowboy };
