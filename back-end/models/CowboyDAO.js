import AbstractDAO from './AbstractDAO.js';

class CowboyModel extends AbstractDAO {
  constructor() {
    super();
  }

  readAllDispo() {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM cowboy WHERE player_id IS NULL`;
      this.connection.execute(query, (error, result) => {
        if (error) {
          console.log("erreur model")
          return reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  /* get all the cowboys */
  readAll() {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM cowboy`;
      this.connection.execute(query, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  /* cow boy get hired */

  hiringCowboy(player_ID, id) {
    return new Promise((resolve, reject) => {
      const query = `UPDATE cowboy SET player_ID = ? WHERE id = ?`;
      const values = [player_ID, id];

      this.connection.execute(query, values, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
}

export default CowboyModel;
