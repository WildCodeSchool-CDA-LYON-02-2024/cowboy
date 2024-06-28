import AbstractDAO from "./AbstractDAO.js";

class UserDAO extends AbstractDAO {
  constructor() {
    super();
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
        `SELECT player.id, player.username, player.email, player.password, colony.id AS colony_id
FROM ${this.table}
JOIN map ON map.player_id = player.id
JOIN colony ON colony.map_id = map.id
WHERE player.email = ?; 
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
