import Ressource from '../ressources/Ressource.js';
import resourcesForColony from '../ressources/resourcesForColony.js';
import ColonyDAO from '../../models/ColonyDAO.js';
import MapDAO from '../../models/MapDAO.js';

class Colony extends Ressource {
  constructor() {
    super();
    this.cost = resourcesForColony;
    this.colony = new ColonyDAO();
    this.map = new MapDAO();
  }

  // checkSlot(slotId) {

  //   this.colony.find(slotId);
  // }

  addColony(id, colonyId, slotId, res) {
    return new Promise((resolve, reject) => {
      // Je verifie si le slot est disponible
      this.colony.find(slotId).then((result) => {
        if (result.length === 0) {
          this.getGlobalResources(id)
            .then((globalResources) => {
              // J'effectue un calcul
              const calc = this.calcResource(
                globalResources,
                colonyId,
                id,
                slotId,
                res
              );
              resolve(calc);
            })
            .catch((err) => {
              reject(err);
              console.error(err);
            });

          // Si le slot n'est pas disponible
        } else console.error('Il y a déjà une colonie sur cet emplacement');
      });
      // Je recupere les golds du joueur
    });
  }

  calcResource(globalResources, colonyId, id, slotId, res, cost = this.cost) {
    let message = '';
    const goldPlayer = globalResources[0].quantity;
    const goldCost = cost[0].quantity;
    // Je verifie si mon joueur a assez de gold pour construire une colony
    const calc = goldPlayer - goldCost;
    if (calc >= 0) {
      console.log('CALC :', calc);
      this.map.update(id, slotId);
      this.colony.create('colony', slotId);
      this.model.updateResourcePlayer(calc, 1, colonyId);
      return (message = "J'ai asser de sous");
    } else {
      return (message = "You don't have enough gold");
    }
  }
}

export default Colony;
