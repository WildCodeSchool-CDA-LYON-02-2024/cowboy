import MapConfig from '../services/map/MapConfig.js';
import BuildingConfig from '../services/buildings/BuildingConfig.js';

const map = new MapConfig();
const building = new BuildingConfig();

building.initType();
map.generateMap();
