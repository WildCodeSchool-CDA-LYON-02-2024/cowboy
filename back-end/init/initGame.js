import MapConfig from '../services/map/MapConfig.js';
import BuildingConfig from '../services/buildings/BuildingConfig.js';
import initRessource from '../services/ressources/Ressource.js';

const map = new MapConfig();
const building = new BuildingConfig();
const ressource = new initRessource();

// Init des types de batiments
building.initType();
// Init de la map
map.initMap();
// Init des ressources sur la map en fonction de son slot
ressource.initRessourceOnMap();
