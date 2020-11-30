const { DataTypes } = require("sequelize");
const sequelize = require("./");

const Resource = sequelize.define("Resource", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fileContent: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
});

module.exports = Resource;
