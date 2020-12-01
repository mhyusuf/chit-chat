// @ts-nocheck
const models = require("../models").sequelize.models;
const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.authMiddleware = async (req, res, next) => {
  try {
    const encodedToken = req.cookies.authToken;
    const token = jwt.verify(encodedToken, process.env.JWT_SECRET);
    const student = await models.Student.findOne({
      where: { userId: token.userId },
    });
    const teacher = await models.Teacher.findOne({
      where: { userId: token.userId },
    });

    if (!student && !teacher) {
      throw new Error("Unauthorized, please login");
    }

    req.user = student ? student : teacher;
    req.token = token;
    next();
  } catch (e) {
    res.status(500).send(e.message);
  }
};
