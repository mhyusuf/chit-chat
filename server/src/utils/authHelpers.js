const jwt = require("jsonwebtoken");

exports.generateAuthToken = (uuid) => {
  const token = jwt.sign({ userId: uuid }, process.env.JWT_SECRET);
  return token;
};
