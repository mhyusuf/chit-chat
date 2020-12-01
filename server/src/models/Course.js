module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("Course", {
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    registrationId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });

  Course.associate = (models) => {
    Course.hasOne(Course, {
      foreignKey: "sisterCourse",
    });
    Course.belongsTo(models.Teacher, {
      foreignKey: "TeacherId",
    });
  };

  return Course;
};
