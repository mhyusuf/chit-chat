module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    sender: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.Assignment);
  };

  return Comment;
};
