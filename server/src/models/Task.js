module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    targetLanguage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Task.associate = (models) => {
    Task.hasMany(models.Assignment);
  };

  return Task;
};
