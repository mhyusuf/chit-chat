import express from "express";
const PORT = process.env.PORT || 5000;
const app = express();
import sequelize from "./models";
import Resource from "./models/Resource";

require("dotenv").config();

(async () => {
  await sequelize.sync();
  console.log("Connected to Sequelize on 5432");
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
})();
