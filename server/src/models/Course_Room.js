module.exports = (sequelize, DataTypes) => {
  const Course_Room = sequelize.define("Course_Room", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  Course_Room.associate = (models) => {
    Course_Room.belongsTo(models.Course);
    Course_Room.belongsTo(models.Room);
  };

  return Course_Room;
};
