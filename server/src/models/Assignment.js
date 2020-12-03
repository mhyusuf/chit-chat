module.exports = (sequelize, DataTypes) => {
  const Assignment = sequelize.define("Assignment", {
    fileData: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    mimeType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dismissed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    likes: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: false,
    },
    fileName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Assignment.associate = (models) => {
    Assignment.belongsTo(models.Student);
    Assignment.belongsTo(models.Task);
    Assignment.hasMany(models.Comment);
  };

  return Assignment;
};
