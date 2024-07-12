import AbstractDAO from './AbstractDAO.js';

class CowboyModel extends AbstractDAO {
  constructor() {
    super();
    this.table = 'cowboy';
  }

  readAllDispo() {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM ${this.table} WHERE colony_id IS NULL`;
      this.connection.execute(query, (error, result) => {
        if (error) {
          console.log('erreur model');
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
      const query = `SELECT * FROM ${this.table} WHERE colony_id IS NOT NULL`;
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

  hiringCowboy(player_id, id) {
    console.log('player_ID :', player_id);
    console.log('ID  :', id);
    return new Promise((resolve, reject) => {
      const query = `UPDATE ${this.table} 
    SET colony_id = (
    SELECT colony.id
    FROM colony
    JOIN map ON colony.map_id = map.id
    JOIN player ON map.player_id = player.id
    WHERE player.id = ?
    ORDER BY colony.id ASC  
    LIMIT 1                 
    ) 
    WHERE id = ?`;
      const values = [player_id, id];

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
