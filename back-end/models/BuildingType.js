import AbstractDAO from './AbstractDAO.js';

class BuildingType extends AbstractDAO {
  constructor() {
    super();
    this.table = 'building_type';
  }
  insert(buildingName) {
    return new Promise((resolve, reject) => {
      this.connection.execute(
        `INSERT INTO ${this.table} (name) VALUES (?)`,
        [buildingName],
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

export default BuildingType;
