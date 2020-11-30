const { Sequelize } = require("sequelize");

require("dotenv").config();

const { USERNAME, PASSWORD, HOST, PORT, DIALECT } = process.env;

const sequelize = new Sequelize({
  username: USERNAME,
  password: PASSWORD,
  host: HOST,
  port: PORT,
  dialect: DIALECT,
});

export default sequelize;
