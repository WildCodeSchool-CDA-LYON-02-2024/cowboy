import AbstractDAO from './AbstractDAO.js';

class MapDAO extends AbstractDAO {
  constructor(db) {
    super(db);
    this.table = 'map';
  }

  create(slot, playerId) {
    return new Promise((resolve, reject) => {
      this.connection.execute(
        `INSERT INTO ${this.table} (slot, player_id) VALUES (?,?)`,
        [slot, playerId],
        (err, result, fields) => {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        }
      );
    });
  }
}

export default MapDAO;
