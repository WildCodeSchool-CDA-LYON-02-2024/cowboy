import AbstractDAO from "./AbstractDAO.js";

class ResourceModel extends AbstractDAO{
    constructor() {
      super()
      this.table = "resource";
    }
  
    getGold(id) {
      return new Promise((resolve, reject) => {
        const query = `SELECT  ${this.table}.quantity AS total_of_gold 
          FROM ${this.table} 
          JOIN colony ON ${this.table}.colony_id = colony.id
          JOIN resource_type ON  ${this.table}.resource_type_id = resource_type.id
          JOIN map ON colony.map_id = map.id
          JOIN player ON map.player_id = player.id
          WHERE player.id = ? AND resource_type.name = "gold"`;
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
  