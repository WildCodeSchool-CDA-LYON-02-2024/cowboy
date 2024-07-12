import ResourceModel from '../../models/ResourceDAO.js';
import ColonyDAO from '../../models/ColonyDAO.js';
import globals from '../Player.js';

function updateResources() {
  const resourceModel = new ResourceModel();
  const colonyModel = new ColonyDAO();
  console.log('globals id :', globals.playerId);
  colonyModel
    .nbOfColony(globals.playerId)
    .then((nbOfCol) => {
      resourceModel
        .getResourceHour(nbOfCol, globals.playerId)
        .then(() => {
          console.log('Database updated.');
        })
        .catch((error) => {
          console.error('Error updating database:', error);
        });
    })
    .catch((err) => console.error(err));
}

export function startScheduledTasks() {
  updateResources();
  setInterval(updateResources, 10000);
}
