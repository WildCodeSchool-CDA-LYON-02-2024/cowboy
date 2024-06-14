import AbstractDAO from './AbstractDAO.js';

class UserDAO extends AbstractDAO {
  constructor(db) {
    super(db);
    this.table = 'player';
  }
}

export default UserDAO;
