// @ts-nocheck
const models = require("../models").sequelize.models;

exports.GetRoomsByCourseId = async (req, res) => {
  try {
    const { id } = req.params;
    const joins = await models.Course_Room.findAll({ where: { CourseId: id } });
    if (joins) {
      const rooms = await joins.map((join) =>
        models.Room.findOne({ where: { id: join.RoomId } })
      );
      if (rooms) res.status(200).send(rooms);
      else res.status(404).send(new Error("No rooms found"));
    } else res.status(404).send(new Error("No rooms found"));
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.GetRoomByStudentId = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await models.Student.findOne({ where: { id } });
    const room = await models.Room.findOne({ where: { id: student.RoomId } });
    if (room) res.status(200).send(room);
    else res.status(404).send(new Error("No room found"));
  } catch (e) {
    res.status(500).send(e.message);
  }
};
