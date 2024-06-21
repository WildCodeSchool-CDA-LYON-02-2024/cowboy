import AbstractDAO from './AbstractDAO.js';

class ResourceModel extends AbstractDAO {
  constructor() {
    super();
    this.table = 'resource';
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
      const query = `SELECT  player_resource.quantity AS total_of_gold 
          FROM player_resource 
          JOIN resource ON player_resource.resource_ID = resource.id
          JOIN resource_type ON resource.resource_type_id = resource_type.id
          WHERE player_resource.player_ID = ? AND resource_type.name = "or"`;
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
