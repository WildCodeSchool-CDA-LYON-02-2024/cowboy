import Database from '../models/Database.js';
import MapDAO from '../models/MapDAO.js';

class MapConfig {
  constructor() {
    this.db = new Database();
    this.slot = 10;
    this.model = new MapDAO(this.db);
    this.nbOfPlayer = null;
    this.maxPlayer = 5;
    this.freeSlotsArray = [];
    this.playerId = 1;
  }

  addPlayer() {
    // Verification du nombre de joueurs sur la map
    this.getNbOfPlayer()
      .then((nb) => {
        if (nb > this.maxPlayer) {
          return console.error('There is to many players on the server');
        }
        // Création d'un tableau avec les slots disponible
        this.freeSlots()
          .then(
            () => this.affectRandomSlot(this.freeSlotsArray) // Affectation d'un slot aux joueurs
          )
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }

  // Generation de la map
  generateMap() {
    console.log('Start init map');
    for (let i = 1; i < this.slot + 1; i++) {
      this.model
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
  affectRandomSlot(array) {
    const position = Math.floor(Math.random() * array.length);
    const slot = array[position].slot;

    this.model
      .update(this.playerId, slot)
      .then(() =>
        console.log(
          `The played id ${this.playerId} was affected to the slot n°${slot}`
        )
      )
      .catch((err) => {
        console.error(err);
      });
  }

  // Combien de slots sont disponible
  freeSlots() {
    return new Promise((resolve, reject) => {
      this.model
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

  getNbOfPlayer() {
    return new Promise((resolve, reject) => {
      this.model
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
}

export default MapConfig;
