module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define("Room", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roomRegistrationId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });

  Room.associate = (models) => {
    Room.belongsToMany(models.Course, { through: "Course_Rooms" });
    Room.hasMany(models.Message);
    Room.hasMany(models.Student);
  };

  return Room;
};
