const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.SECERET_KEY, {
    expiresIn: "48h",
  });
  return token;
};

const getUserIdFromToken = (token) => {
  const decodedToken = jwt.verify(token, process.env.SECERET_KEY);
  return decodedToken.userId;
};

module.exports = { generateToken, getUserIdFromToken };
