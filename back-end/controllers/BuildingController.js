import jwt from "jsonwebtoken";
import BuildingDAO from "../models/BuildingDAO.js";

const Building = new BuildingDAO();

const browse = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  let loggedPlayerId;

  try {
    const decodedToken = jwt.verify(token, "secret");
    loggedPlayerId = decodedToken.payload.sub.id;
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }

  const colonyId = req.params.colonyId;

  try {
    const levels = await Building.getLevel(colonyId);
    res.json(levels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default { browse };
