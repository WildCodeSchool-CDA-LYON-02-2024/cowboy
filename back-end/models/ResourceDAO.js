import AbstractDAO from "./AbstractDAO.js";

class ResourceModel extends AbstractDAO {
  constructor() {
    super();
    this.table = "resource";
  }

  insert(quantity, ressourceTypeId, colonyId) {
    /*console.log(
      'quantity :',
      quantity,
      'resourceTypeId : ',
      ressourceTypeId,
      'colony :',
      colonyId
    );*/
    return new Promise((resolve, reject) => {
      this.connection.execute(
        `INSERT INTO ${this.table} (quantity, resource_type_id, colony_id) VALUES (?,?,?)
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

  getGold(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT SUM(resource.quantity) AS total_of_gold
    FROM resource
    JOIN resource_type ON resource.resource_type_id = resource_type.id
    JOIN colony ON resource.colony_id = colony.id
  JOIN map ON colony.map_id = map.id
   WHERE map.player_id = ? AND resource_type.name = "gold";`;
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

  getResources(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT resource_type.name, resource.quantity
                  FROM resource
                   JOIN resource_type ON resource.resource_type_id = resource_type.id
                   JOIN colony ON resource.colony_id = colony.id
                   JOIN map ON colony.map_id = map.id
                   WHERE map.player_id = ? `;
      this.connection.execute(query, [id], (error, result) => {
        if (error) {
          reject(error);
        } else {
          if (result.length > 0) {
            resolve(result);
          } else {
            resolve({
              message: "pas de ressources disponibles",
            });
          }
        }
      });
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

  updateResource(colonyId, resources) {
    return new Promise((resolve, reject) => {
      const { wood, stone, gold, metal } = resources;
      db.query(
        `UPDATE ${this.table}
       SET wood = ?, stone = ?, gold = ?, metal = ?
       WHERE colony_id = ?`,
        [wood, stone, gold, metal, colonyId],
        (err, result) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        }
      );
    });
  }
}

export default ResourceModel;
