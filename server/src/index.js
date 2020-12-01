const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const db = require("./models");
const { Teacher, Course } = db.sequelize.models;

require("dotenv").config();

(async () => {
  await db.sequelize.sync();

  Course.create({
    level: 1,
    registrationId: "0bd6ace4-a310-49a3-90e9-750f94187e86",
    TeacherId: 1,
  });
  console.log("Connected to Sequelize on 5432");
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
})();
