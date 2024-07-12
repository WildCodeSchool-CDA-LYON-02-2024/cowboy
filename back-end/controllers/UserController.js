import MapDAO from '../models/MapDAO.js';
import UserDAO from '../models/UserDAO.js';

import error from '../services/errors/error.js';
import MapConfig from '../services/map/MapConfig.js';
import { hashPassword } from '../utils/auth.js';
import AbstractController from './AbsractController.js';
import globals from '../services/Player.js';

class UserController extends AbstractController {
  constructor() {
    super();
    this.model = new UserDAO();
    this.init = new MapConfig();
    this.map = new MapDAO();
    this.player = null;
  }

  add = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await hashPassword(password);

    await this.model
      .create(username, email, hashedPassword)
      .then((result) => {
        this.init.addPlayer(result.insertId);
        return res.status(200).json({ message: 'PLAYER créé avec succès' });
      })
      .catch((err) => {
        error(err, res);
        console.error(err);
      });
  };
  findByMailForLogin = (req, res, next) => {
    const { email, password } = req.body;
    let slotId = null;
    let otherSlot = null;

    this.model
      .findByMail(email)
      .then((rows) => {
        if (rows.length === 0) {
          return res.status(404).json({ error: 'Utilisateur non trouvé' });
        }

        globals.playerId = rows[0].id; // Assurez-vous que cette affectation a un but précis

        // Récupérer le slot affecté au joueur pour le renvoyer dans le front
        this.map
          .findOtherSlot(rows[0].id)
          .then((result) => {
            otherSlot = result.map((slotObj) => slotObj.slot);

            // Récupérer les slots du joueur
            this.map
              .findSlotByPlayerId(rows[0].id)
              .then((data) => {
                slotId = data.map((slotObj) => slotObj.slot);

                // Définir req.user avec les informations nécessaires
                req.user = {
                  id: rows[0].id,
                  username: rows[0].username,
                  email: rows[0].email,
                  password: rows[0].password,
                  colony_id: rows[0].colony_id,
                  slot: slotId,
                  otherSlot: otherSlot,
                };

                next(); // Appel de next une fois que req.user est défini
              })
              .catch((err) => {
                console.error(err);
                return res
                  .status(500)
                  .json({
                    error: 'Erreur serveur lors de la recherche des slots',
                  });
              });
          })
          .catch((err) => {
            console.error(err);
            return res
              .status(500)
              .json({ error: 'Erreur serveur lors de la recherche des slots' });
          });
      })
      .catch((err) => {
        console.error(err);
        return res
          .status(500)
          .json({
            error: "Erreur serveur lors de la recherche de l'utilisateur",
          });
      });
  };
}

export default UserController;
