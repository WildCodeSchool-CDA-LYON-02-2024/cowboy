import ResourceModel from "../models/ResourceDAO.js";
import jwt from "jsonwebtoken";

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

export default { browse };
