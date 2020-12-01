const models = require("../models").sequelize.models;

exports.LogoutUser = async (req, res) => {
  res.clearCookie("authToken");
  res.redirect("/");
};

exports.GetCurrentUser = async (req, res) => {
  try {
    res.status(200).send(req.user);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
