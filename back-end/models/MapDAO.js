import AbstractDAO from './AbstractDAO.js';

class MapDAO extends AbstractDAO {
  constructor(db) {
    super(db);
    this.table = 'map';
  }

  create(slot) {
    return new Promise((resolve, reject) => {
      this.connection.execute(
        `INSERT INTO ${this.table} (slot) VALUES (?)`,
        [slot],
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
