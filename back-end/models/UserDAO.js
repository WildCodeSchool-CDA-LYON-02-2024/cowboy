import AbstractDAO from "./AbstractDAO.js";
import {db} from "./Database.js"

class UserDAO extends AbstractDAO {
  constructor() {
    super(db);
    this.table = "player";
  }

  findAll() {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `SELECT id, username, email FROM ${this.table}`,
        (err, result, fields) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        }
      );
    });
  }

  read(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM ${this.table} WHERE id = ?`;
      this.connection.execute(query, [id], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result[0]);
        }
      });
    });
  }
  create(username, email, password) {
    return new Promise((resolve, reject) => {
      this.connection.execute(
        `INSERT INTO ${this.table} (username, email, password) VALUES (?,?,?)`,
        [username, email, password],
        (err, result, fields) => {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        }
      );
    });
  }

  findByMail(email) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `SELECT id, username, email, password
        FROM ${this.table} WHERE email = ? 
          `,
        [email],
        (err, result, field) => {
          if (err) {
            return reject(err);
          }

          resolve(result);
        }
      );
    });
  }
}

export default UserDAO;
