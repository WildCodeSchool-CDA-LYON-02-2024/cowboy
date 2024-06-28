import AbstractDAO from "./AbstractDAO.js";

class ResourceModel extends AbstractDAO {
  constructor() {
    super();
    this.table = "resource";
  }

  insert(quantity, ressourceTypeId, colonyId) {
    return new Promise((resolve, reject) => {
      this.connection.execute(
        `INSERT INTO ${this.table} (quantity, resource_type_id, colony_id)
         VALUES (?,?,?)
        `,
        [quantity, ressourceTypeId, colonyId],
        (err, result, fields) => {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        }
      );
    });
  }

  findAll() {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `SELECT ${this.table}.quantity, 
         ${this.table}.resource_type_id, 
         resource_type.name,
         ${this.table}.colony_id, 
         ${this.table}.map_id 
         FROM ${this.table}
        JOIN resource_type ON resource_type.id = resource.resource_type_id WHERE ${this.table}.colony_id is NULL`,
        (err, result, fields) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        }
      );
    });
  }

  insertRessourceOnMap(quantity, ressourceypeId, mapId) {
    return new Promise((resolve, reject) => {
      this.connection.execute(
        `INSERT INTO ${this.table} (quantity, resource_type_id,map_id)
         VALUES (?,?,?)`,
        [quantity, ressourceypeId, mapId],
        (err, result, fields) => {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        }
      );
    });
  }

  getGold(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT SUM(resource.quantity) AS total_of_gold 
                   FROM resource
                   JOIN resource_type ON resource.resource_type_id = resource_type.id
                   JOIN colony ON resource.colony_id = colony.id
                   JOIN map ON colony.map_id = map.id
                   WHERE map.player_id = ? AND resource_type.name = "gold"`;
      this.connection.execute(query, [id], (error, result) => {
        if (error) {
          reject(error);
        } else {
          if (result.length > 0) {
            resolve(result[0]);
          } else {
            resolve({
              total_of_gold: 0,
            });
          }
        }
      });
    });
  }
}

export default ResourceModel;
