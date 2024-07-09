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
      const query = `SELECT resource_type.id, resource_type.name, resource.quantity
              FROM resource
              JOIN resource_type ON resource.resource_type_id = resource_type.id
              JOIN colony ON resource.colony_id = colony.id
              JOIN map ON colony.map_id = map.id
              WHERE map.player_id = ?`;
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
  //UPDATE RESOURCES KEEP IT
  updateResources(colonyId, resources) {
    return new Promise((resolve, reject) => {
      const queries = resources.map((resource) => {
        console.log(
          `Updating resource: ${resource.id} with quantity: ${resource.quantity}`
        );
        return this.updateResource(colonyId, resource.quantity, resource.id);
      });
      Promise.all(queries)
        .then((results) => {
          console.log("All resources updated successfully:", results);
          resolve(results);
        })
        .catch((err) => {
          console.error("Error updating resources:", err);
          reject(err);
        });
    });
  }

  updateResource(colonyId, quantity, resourceTypeId) {
    return new Promise((resolve, reject) => {
      const query = `UPDATE resource SET quantity = ? WHERE colony_id = ? AND resource_type_id = ?`;
      console.log(
        `Executing query: ${query} with values: [${quantity}, ${colonyId}, ${resourceTypeId}]`
      );
      this.connection.execute(
        query,
        [quantity, colonyId, resourceTypeId],
        (err, result) => {
          if (err) {
            console.error("Error executing query:", err);
            reject(err);
          } else {
            console.log("Query executed successfully:", result);
            resolve(result);
          }
        }
      );
    });
  }

  //****************************************************** */
  getResourceHour() {
    return new Promise((resolve, reject) => {
      const query = `
        UPDATE resource
          JOIN colony ON resource.colony_id = colony.id
          JOIN map ON colony.map_id = map.id
          SET resource.quantity = resource.quantity + 1
          WHERE map.player_id IS NOT NULL;
`;

      this.connection.execute(query, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
}
export default ResourceModel;
