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

  update(playerId, slot) {
    return new Promise((resolve, reject) => {
      this.connection.execute(
        `UPDATE ${this.table} set player_id = ? WHERE slot = ?`,
        [playerId, slot],
        (err, result, fields) => {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        }
      );
    });
  }

  countPlayerId() {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `select count(distinct player_id) as nbOfPlayer from map`,
        (err, result, fields) => {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        }
      );
    });
  }

  getFreeSlot() {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `SELECT slot FROM ${this.table} WHERE player_id is NULL`,
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
