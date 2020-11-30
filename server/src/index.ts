import express from "express";
const PORT = process.env.PORT || 5000;
const app = express();
import sequelize from "./models";
import Resource from "./models/Resource";

require("dotenv").config();

(async () => {
  await sequelize.sync();
  Resource.create({
    title: "THIS IS A RESOURCE",
    description: "THIS IS a description",
    level: "2",
    fileContent: null,
  });
  console.log("Connected to Sequelize on 5432");
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
})();
