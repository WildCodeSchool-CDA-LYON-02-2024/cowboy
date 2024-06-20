import AbstractController from '../../controllers/AbsractController.js';
import BuildingDAO from '../../models/BuildingDAO.js';
import BuildingType from '../../models/BuildingType.js';

class BuildingConfig extends AbstractController {
  constructor() {
    super();
    this.building = new BuildingDAO();
    this.buildingTypeModel = new BuildingType();
    // this.building = this.model.table;
    this.lvl = 1;
    this.wood = null;
    this.gold = null;
    this.metal = null;
    this.type = ['saloon', 'armory', 'stable', 'warehouse'];
  }

  // Init des types de building
  initType() {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < this.type.length; i++) {
        let value = this.type[i];
        this.buildingTypeModel
          .insert(value)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
            console.error(err);
          });
      }
    });
  }

  //Init des building de la colonie
  initBuilding(colonyId) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < this.type.length; i++) {
        this.building
          .create(this.lvl, i + 1, colonyId)
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      }
    });
  }

  getLevel() {
    this.building
      .getLevel()
      .then((res) => (this.lvl = res))
      .catch((err) => console.error(err));
  }
  nextLevel() {
    console.log('this table :', this.building);
  }
}

export default BuildingConfig;
