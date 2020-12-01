module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define("Message", {
    sender: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    contentType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    textContent: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fileContent: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    seenBy: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: false,
    },
  });

  Message.associate = (models) => {
    Message.belongsTo(models.Room);
  };

  return Message;
};
