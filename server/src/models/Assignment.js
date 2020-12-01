module.exports = (sequelize, DataTypes) => {
  const Assignment = sequelize.define("Assignment", {
    submitData: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    dismissed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    likes: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: false,
    },
  });

  Assignment.associate = (models) => {
    Assignment.belongsTo(models.Student);
    Assignment.belongsTo(models.Task);
  };

  return Assignment;
};
