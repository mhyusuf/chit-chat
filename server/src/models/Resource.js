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
    fileData: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    mimeType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fileName: {
      type: DataTypes.STRING,
      allowNull: true,
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
