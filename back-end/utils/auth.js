import argon2 from "argon2";
import jwt from "jsonwebtoken";

const generateToken = (payload = {}) => {
  const token = jwt.sign(payload, "secret", {
    expiresIn: "1h",
  });
  return token;
};

const hashPassword = async (password) => {
  const hashed = await argon2
    .hash(password)
    .then((hashedPassword) => {
      return hashedPassword;
    })
    .catch((err) => {
      console.warn(err);
      return false;
    });
  return hashed;
};

const verifyPassword = (req, res, next) => {
  const { id, username, email, colony_id } = req.user[0];

  argon2
    .verify(req.user[0].password, req.body.password)
    .then((isVerified) => {
      if (isVerified) {
        const payload = {
          sub: {
            id: id,
            userame: username,
            email: email,
            colonyId: colony_id,
          },
        };

        res.send({ token: generateToken({ payload }) });
      } else {
        return res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      return res.sendStatus(500);
    });
};

export { hashPassword, verifyPassword };
