import { db } from '../models/Database.js';

class AbstractDAO {
  constructor() {
    this.connection = db.connection;
    this.table = null;
  }
  findAll() {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `SELECT * FROM ${this.table}`,
        (err, result, fields) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        }
      );
    });
  }
}

export default AbstractDAO;
