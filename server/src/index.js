const express = require("express");
const { Sequelize } = require("sequelize");
const PORT = process.env.PORT || 5000;
const app = express();
const sequelize = require("./models");
const Teacher = require("./models/Teacher");

require("dotenv").config();

(async () => {
  await sequelize.sync();

  Teacher.create({
    userId: "0bd6ace4-a310-49a3-90e9-750f94187e76",
    email: "fdasf@fdasfd.com",
    name: "sdfsadf sdafasdf",
    password: "fasdfasfas",
  });
  console.log("Connected to Sequelize on 5432");
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
})();
