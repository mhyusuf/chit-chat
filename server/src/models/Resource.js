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
      type: DataTypes.Boolean,
      allowNull: false,
    },
    fileContent: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
  });

  return Resource;
};
