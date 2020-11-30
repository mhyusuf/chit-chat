const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const sequelize = require("./models");
const Resource = require("./models/Resource");

require("dotenv").config();

(async () => {
  await sequelize.sync();
  Resource.create({
    title: "me@me.net",
    description: "Some String",
    level: 3,
    fileContent: null,
  });
  console.log("Connected to Sequelize on 5432");
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
})();
