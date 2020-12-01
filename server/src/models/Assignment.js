module.exports = (sequelize, DataTypes) => {
  const Assignment = sequelize.define("Assignment", {
    submitData: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    dismissed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    likes: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: false,
      defaultValue: 0,
    },
  });

  Assignment.associate = (models) => {
    Assignment.belongsTo(models.Student);
    Assignment.belongsTo(models.Task);
  };

  return Assignment;
};
