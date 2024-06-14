import Database from '../models/Database.js';
import UserDAO from '../models/UserDAO.js';
import AbstractController from './AbsractController.js';

class UserController extends AbstractController {
  constructor() {
    super();
    this.db = new Database();
    this.model = new UserDAO(this.db);
  }
}

export default UserController;
