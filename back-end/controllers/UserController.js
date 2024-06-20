//import { db } from '../models/Database.js';
import UserDAO from '../models/UserDAO.js';

import error from '../services/errors/error.js';
import { hashPassword } from '../utils/auth.js';
import AbstractController from './AbsractController.js';

class UserController extends AbstractController {
  constructor() {
    super();
    this.model = new UserDAO();
  }
  add = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await hashPassword(password);

    await this.model
      .create(username, email, hashedPassword)
      .then(() => {
        res.status(200).json({ message: 'PLAYER créé avec succès' });
      })
      .catch((err) => {
        error(err, res);
        console.error(err);
        res.status(500).json({
          error: 'Une erreur est survenue lors de la création du PLAYER',
        });
      });
  };

  findByMailForLogin = (req, res, next) => {
    const { email, password } = req.body;
    this.model
      .findByMail(email)
      .then((rows) => {
        if (rows[0] === undefined) {
          res.status(404).json({ error: 'Utilisateur non trouvé' });
        } else req.user = { ...rows, password: password };
        next();
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({
          error: "Erreur serveur lors de la recherche de l'utilisateur",
        });
      });
  };
}

export default UserController;
