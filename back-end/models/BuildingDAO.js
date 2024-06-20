import AbstractDAO from './AbstractDAO.js';

class BuildingDAO extends AbstractDAO {
  constructor() {
    super();
    this.table = 'building';
  }
  //TODO : Création des building
  create(level, buildingTypeId, colonyId) {
    console.log(
      'level :',
      level,
      'buildingTypeId :',
      buildingTypeId,
      ' colony Id :',
      colonyId
    );
    return new Promise((resolve, reject) => {
      this.connection.execute(
        `INSERT INTO ${this.table} (level,building_type_id,colony_id)
         VALUES (?,?,?)`,
        [level, buildingTypeId, colonyId],
        (err, result, fields) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        }
      );
    });
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
