import Database from '../models/Database.js';
import UserDAO from '../models/UserDAO.js';

import AbstractController from './AbsractController.js';
import { hashPassword } from '../utils/auth.js';

class UserController extends AbstractController {
  constructor() {
    super();
    this.db = new Database();
    this.model = new UserDAO(this.db);
  }
  add = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await hashPassword(password);

    await this.model
      .create(username, email, hashedPassword)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  findByMailForLogin = (req, res, next) => {
    const { email, password } = req.body;
    this.model
      .findByMail(email)
      .then((rows) => {
        if (rows[0] === undefined) {
          res.sendStatus(404);
        } else req.user = { ...rows, password: password };
        next();
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

export default UserController;
