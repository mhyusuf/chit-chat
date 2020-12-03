module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("Student", {
    isTeacher: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
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

  Student.associate = (models) => {
    Student.belongsTo(models.Room);
    Student.belongsTo(models.Course);
    Student.hasMany(models.Assignment);
  };

  return Student;
};
