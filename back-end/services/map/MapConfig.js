import ColonyDAO from '../../models/ColonyDAO.js';
import MapDAO from '../../models/MapDAO.js';
import BuildingConfig from '../buildings/BuildingConfig.js';

class MapConfig {
  constructor() {
    this.maxSlot = 10;
    this.map = new MapDAO();
    this.colony = new ColonyDAO();
    this.building = new BuildingConfig();
    this.nbOfPlayer = null;
    this.maxPlayer = 5;
    this.freeSlotsArray = [];
    this.slot = null;
    this.slotId = null;
  }

  addPlayer(playerId) {
    // Verification du nombre de joueurs sur la map
    this.getNbOfPlayer()
      .then((nb) => {
        if (nb > this.maxPlayer) {
          return console.error('There is to many players on the server');
        }
        // Création d'un tableau avec les slots disponible
        this.freeSlots()
          .then(() => {
            // Affectation du joueur sur un slot de map
            this.affectRandomSlot(this.freeSlotsArray, playerId);
            // Recuperation de l'id du slot sur la table map
            this.getIdBySlot()
              .then(() => {
                // Insertion de l'id de la table map, dans la table colony, afin de relier le nouveau joueur a sa colonie
                this.affectPlayerToColony()
                  .then((res) => {
                    // Init des building de la colonie
                    this.building.initBuilding(res.insertId);
                  })
                  .catch((err) => console.error(err));
              })
              .catch((err) => {
                console.error(err);
              });
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // Generation de la map
  generateMap() {
    console.log('Start init map');
    for (let i = 1; i < this.maxSlot + 1; i++) {
      this.map
        .create(i)
        .then(() => {
          console.log(`Slot n°${i} created`);
          if (i === this.slot) {
            console.log(`Map has sucessfully created with ${this.slot} slots`);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  // Affectation d'un slot de manière aleatoire
  affectRandomSlot(array, playerId) {
    console.log('playerId : ', playerId);
    const position = Math.floor(Math.random() * array.length);
    this.slot = array[position].slot;

    this.map
      .update(playerId, this.slot)
      .then(() => {
        console.log(
          `The played id ${playerId} was affected to the slot n°${this.slot}`
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // Combien de slots sont disponible
  freeSlots() {
    return new Promise((resolve, reject) => {
      this.map
        .getFreeSlot()
        .then((res) => {
          // Si il n'y a plus de slot disponible = erreur
          if (res.length === 0) {
            reject('There is no available slot');
          }

          for (let item of res) {
            this.freeSlotsArray.push(item);
          }
          return resolve(this.freeSlotsArray);
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        });
    });
  }

  // Verification du nombre de joueur
  getNbOfPlayer() {
    return new Promise((resolve, reject) => {
      this.map
        .countPlayerId()
        .then((nb) => {
          this.nbOfPlayer = nb[0].nbOfPlayer;
          resolve(this.nbOfPlayer);
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        });
    });
  }

  // Recuperation de l'id du slot
  getIdBySlot() {
    return new Promise((resolve, reject) => {
      this.map
        .getIdBySlot(this.slot)
        .then((res) => {
          this.slotId = res[0].id;
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  // Insertion de l'id de la table map, dans la table colony, afin de relier le nouveau joueur a sa colonie
  affectPlayerToColony() {
    return new Promise((resolve, reject) => {
      console.log('slotId : ', this.slotId);
      this.colony
        .create('test', this.slotId)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        });
    });
  }
}

export default MapConfig;
