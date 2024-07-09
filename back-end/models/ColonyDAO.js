import AbstractDAO from './AbstractDAO.js';

class ColonyDAO extends AbstractDAO {
  constructor() {
    super();
    this.table = 'colony';
  }

  find(slotId){
    return new Promise((resolve, reject) => {
      this.connection.execute(
        `SELECT id FROM ${this.table} WHERE map_id = ?`,
        [slotId],
        (err, result, fields) => {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        }
      );
    });
  }

  create(name, mapId) {
    return new Promise((resolve, reject) => {
      this.connection.execute(
        `INSERT INTO ${this.table} (name, map_id) VALUES (?,?)`,
        [name, mapId],
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

export default ColonyDAO;
