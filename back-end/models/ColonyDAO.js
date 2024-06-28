import AbstractDAO from './AbstractDAO.js';

class ColonyDAO extends AbstractDAO {
  constructor() {
    super();
    this.table = 'colony';
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
