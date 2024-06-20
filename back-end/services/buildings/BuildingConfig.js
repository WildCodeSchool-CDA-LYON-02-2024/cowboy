import AbstractController from '../../controllers/AbsractController.js';
import BuildingDAO from '../../models/BuildingDAO.js';

class BuildingConfig extends AbstractController {
  constructor() {
    super();
    this.model = new BuildingDAO();
    this.building = this.model.table;
    this.lvl = null;
    this.wood = null;
    this.gold = null;
    this.metal = null;
  }
  getLevel() {
    this.model
      .getLevel()
      .then((res) => (this.lvl = res))
      .catch((err) => console.error(err));
  }
  nextLevel() {
    console.log('this table :', this.building);
  }
}

export default BuildingConfig;
