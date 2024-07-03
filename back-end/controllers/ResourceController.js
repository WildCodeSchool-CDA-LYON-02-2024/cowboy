import ResourceModel from '../models/ResourceDAO.js';
import jwt from 'jsonwebtoken';
import RessourceService from '../services/ressources/Ressource.js';
const resourceService = new RessourceService();

const Resource = new ResourceModel();
/* get all cowboys */

const browse = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  let loggedPlayerId;

  try {
    const decodedToken = jwt.verify(token, 'secret');
    loggedPlayerId = decodedToken.payload.sub.id;
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
  Resource.getResources(loggedPlayerId)
    .then((resource) => {
      res.json(resource);
    })
    .catch((err) => {
      console.error(err);
    });
};

const find = (req, res) => {
  const id = req.params.id;
  Resource.getResourcesSlot(id)
    .then((rows) => {
      console.log('rows :', rows);
      res.json(rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: 'An error occurred while fetching data' });
    });
};

const update = (req, res) => {
  resourceService.collectResources(req, res);
};
export default { browse, find, update };
