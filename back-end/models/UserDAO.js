import AbstractDAO from './AbstractDAO.js';

class UserDAO extends AbstractDAO {
  constructor() {
    super();
    this.table = 'player';
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

  create(username, email, password) {
    return new Promise((resolve, reject) => {
      console.log(username, email, password);
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
