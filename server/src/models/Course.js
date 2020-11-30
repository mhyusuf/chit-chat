const { DataTypes } = require("sequelize");
const sequelize = require("./");
const Teacher = require("./Teacher");

const Course = sequelize.define("Course", {
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  courseId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

// Course.hasOne(Teacher);
// Course.hasOne(Course, {
//   foreignKey: 'sisterCourse'
// });

module.exports = Course;
