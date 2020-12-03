module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define("Teacher", {
    isTeacher: true,
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
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Teacher.associate = (models) => {
    Teacher.hasMany(models.Course);
  };

  return Teacher;
};
