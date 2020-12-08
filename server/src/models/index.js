require("dotenv").config();
const { USERNAME, PASSWORD, HOST, PORT, DIALECT } = process.env;
const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs");
const path = require("path");
const db = {};
// @ts-ignore
const sequelize = new Sequelize({
  username: USERNAME,
  password: PASSWORD,
  host: HOST,
  port: PORT,
  dialect: DIALECT,
  logging: false,
});

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== "index.js" && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const modelImport = require(path.join(__dirname, file));
    const model = modelImport(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
