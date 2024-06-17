import Database from '../models/Database.js';
import MapDAO from '../models/MapDAO.js';

class MapConfig {
  constructor() {
    this.db = new Database();
    this.slot = 60;
    this.model = new MapDAO(this.db);
  }
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
}

export default MapConfig;
