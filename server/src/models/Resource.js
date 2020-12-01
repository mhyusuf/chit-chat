module.exports = (sequelize, DataTypes) => {
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
    extra: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    fileContent: {
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

  return Resource;
};
