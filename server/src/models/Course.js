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
    nativeLanguage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    targetLanguage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Course.associate = (models) => {
    Course.hasOne(Course, {
      foreignKey: "sisterCourse",
    });
    Course.hasMany(models.Room);
    Course.hasMany(models.Student);
    Course.belongsTo(models.Teacher);
    Course.belongsToMany(models.Room, { through: "Course_Rooms" });
  };

  return Course;
};
