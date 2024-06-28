import RessourceTypeDAO from '../../models/RessourceTypeDAO.js';
import ResourceDAO from '../../models/ResourceDAO.js';
import ressourcesPosition from './ressourcesPosition.js';

class Ressource {
  constructor(name, quantity) {
    this.typeModel = new RessourceTypeDAO();
    this.model = new ResourceDAO();
    this.type = name;
    this.quantity = quantity;
    this.initQuantity = 50;
    this.cost = null;
    this.typeArray = ['gold', 'metal', 'stone', 'wood'];
    this.initPosition = ressourcesPosition;
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

  // Initialisation des ressources a la création de la map
  initRessourceOnMap() {
    return new Promise((resolove, reject) => {
      for (let i = 0; i < this.initPosition.length; i++) {
        let ressourceSet = this.initPosition[i];
        const mapId = ressourceSet.slot;
        for (let key in ressourceSet) {
          if (key !== 'slot') {
            const ressourceTypeId = key;
            const quantity = ressourceSet[key];
            this.model
              .insertRessourceOnMap(quantity, ressourceTypeId, mapId)
              .then((result) => resolove(result))
              .catch((err) => {
                console.error(err);
                reject(err);
              });
          }
        }
      }
    });
  }

  parseAll(rows) {
    let resourceMap = {};

    // Parcourt les données pour regrouper par map_id
    rows.forEach((item) => {
      // Extrait les valeurs de map_id, name, et quantity
      const { map_id, name, quantity } = item;

      // Si map_id n'existe pas dans resourceMap, initialise un nouvel objet pour ce map_id
      if (!resourceMap[map_id]) {
        resourceMap[map_id] = { map_id };
      }

      // Ajoute la quantité pour chaque type de ressource (name) sous le map_id correspondant
      resourceMap[map_id][name] = quantity;
    });

    // Affiche le résultat final dans la console
    console.log(resourceMap);
  }
}

export default Ressource;
