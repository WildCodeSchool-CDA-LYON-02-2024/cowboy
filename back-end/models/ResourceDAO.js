import {db} from "./Database.js"

class ResourceModel {
    constructor() {
      this.connection = db.connection;
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
  