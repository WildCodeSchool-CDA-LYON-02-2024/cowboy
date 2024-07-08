import jwt from "jsonwebtoken";
import ResourceModel from "../models/ResourceDAO.js";

const Resource = new ResourceModel();
/* get all cowboys */

const browse = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  let loggedPlayerId;

  try {
    const decodedToken = jwt.verify(token, "secret");
    loggedPlayerId = decodedToken.payload.sub.id;
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
  Resource.getResources(loggedPlayerId)
    .then((resource) => {
      res.json(resource);
    })
    .catch((err) => {
      console.error(err);
    });
};
const updateResources = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  let loggedPlayerId;

  try {
    const decodedToken = jwt.verify(token, "secret");
    loggedPlayerId = decodedToken.payload.sub.id;
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }

  const { colonyId } = req.params;
  const { resourceName, quantity } = req.body;

  Resource.updateResource(colonyId, resourceName, quantity);
  console
    .log("COLONY:", colonyId, resourceName, quantity, "CONTROLLER")
    .then((result) => {
      res.json({ message: "Ressource mise à jour avec succès", result });
    })
    .catch((err) => {
      console.error("Failed to update resource:", err);
      res.status(500).json({ error: "Failed to update resource" });
    });
};

export default { browse, updateResources };
