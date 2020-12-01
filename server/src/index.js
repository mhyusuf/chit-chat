const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const db = require("./models");
const { Teacher, Course } = db.sequelize.models;

require("dotenv").config();

(async () => {
  await db.sequelize.sync();

  console.log("Connected to Sequelize on 5432");
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
})();
