import MapController from '../controllers/MapController.js';
const mapController = new MapController();

class generateMap {
  constructor(id = 1) {
    this.slot = 10;
    this.playerId = id;
  }

  generateMap() {
    for (let i = 0; i < 10; i++) {
      console.log('1');
      mapController.add;
    }
  }
}

export default generateMap;
