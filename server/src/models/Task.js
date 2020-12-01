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
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.BLOB,
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

  return Task;
};
