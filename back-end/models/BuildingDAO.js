import AbstractDAO from './AbstractDAO.js';

class BuildingDAO extends AbstractDAO {
  constructor(db) {
    super(db);
    this.table = 'building';
    console.log('db :', db);
  }

  getLevel(buildingTypeId, colonyId) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `SELECT level FROM ${this.table}
         WHERE building_type_id = ? 
         AND colony_id = ? `,
        [buildingTypeId, colonyId],
        (err, result, fields) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        }
      );
    });
  }
}

export default BuildingDAO;
