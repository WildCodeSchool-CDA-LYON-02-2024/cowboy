import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  let token;

  if (req.query.token) {
    token = req.query.token;
  } else if (req.headers.authorization) {
    const authHeader = req.headers.authorization;
    if (authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Authorization token is missing" });
  }

  try {
    const decodedToken = jwt.verify(token, "secret");
    req.loggedPlayerId = decodedToken.payload.sub.id; 
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default verifyToken;
