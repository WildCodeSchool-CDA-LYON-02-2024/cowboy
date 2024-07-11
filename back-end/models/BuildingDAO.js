import AbstractDAO from "./AbstractDAO.js";

class BuildingDAO extends AbstractDAO {
  constructor() {
    super();
    this.table = "building";
  }

  create(level, buildingTypeId, colonyId) {
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
  //recup les niveaux de chaque batiment de la colonie
  getLevel(colonyId) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `SELECT building.building_type_id, building.level, building_type.name
         FROM ${this.table}
         JOIN building_type ON building.building_type_id = building_type.id
         WHERE building.colony_id = ? `,
        [colonyId],
        (err, result, fields) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        }
      );
    });
  }

  updateLevel(colonyId, buildingTypeId) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `UPDATE ${this.table}
         SET level = level + 1
         WHERE colony_id = ? AND building_type_id = ?`,
        [colonyId, buildingTypeId],
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

export default BuildingDAO;
