module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    senderId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    senderName: {
      type: DataTypes.STRING,
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
