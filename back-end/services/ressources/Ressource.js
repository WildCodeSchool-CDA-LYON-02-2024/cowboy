import RessourceTypeDAO from '../../models/RessourceTypeDAO.js';
import ResourceDAO from '../../models/ResourceDAO.js';

class Ressource {
  constructor(name, quantity) {
    this.typeModel = new RessourceTypeDAO();
    this.model = new ResourceDAO();
    this.type = name;
    this.quantity = quantity;
    this.initQuantity = 50;
    this.cost = null;
    this.typeArray = ['gold', 'metal', 'stone', 'wood'];
  }

  initRessourceBuilding(colonyId, qtity) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < this.typeArray.length; i++) {
        this.model
          .insert(qtity, i + 1, colonyId)
          .then((result) => {
            resolve(result);
          })
          .catch((err) => {
            console.error(err);
            reject(err);
          });
      }
    });
  }

  initType() {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < this.typeArray.length; i++) {
        let value = this.typeArray[i];
        this.typeModel
          .insert(value)
          .then((result) => resolve(result))
          .catch((err) => reject(err));
      }
    });
  }
}

export default Ressource;