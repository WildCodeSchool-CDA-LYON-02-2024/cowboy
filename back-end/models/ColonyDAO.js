import AbstractDAO from './AbstractDAO.js';

class ColonyDAO extends AbstractDAO {
  constructor() {
    super();
    this.table = 'colony';
  }

  find(slotId) {
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
  nbOfColony(id) {
    console.log('id nbOfColony : ', id);
    return new Promise((resolve, reject) => {
      this.connection.execute(
        `SELECT colony.id 
         FROM colony 
         JOIN map ON colony.map_id = map.id 
         JOIN player ON map.player_id = player.id 
         WHERE player.id = ?`,
        [id],
        (err, result, fields) => {
          if (err) {
            return reject(err);
          }
          return resolve(result.length);
        }
      );
    });
  }
}

export default ColonyDAO;
