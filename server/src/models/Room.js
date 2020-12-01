module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define("Room", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Room.associate = (models) => {
    Room.belongsToMany(models.Course, { through: "Course_Rooms" });
  };

  return Room;
};
