require("dotenv").config();
const { USERNAME, PASSWORD, HOST, PORT, DIALECT } = process.env;
const { Sequelize } = require("sequelize");
// @ts-ignore
const sequelize = new Sequelize({
  username: USERNAME,
  password: PASSWORD,
  host: HOST,
  port: PORT,
  dialect: DIALECT,
});

module.exports = sequelize;
