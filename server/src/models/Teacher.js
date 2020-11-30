const { DataTypes } = require("sequelize");
const sequelize = require("./");
const Course = require("./Course");

const Teacher = sequelize.define("Teacher", {
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Teacher.belongsTo(Course);

module.exports = Teacher;
