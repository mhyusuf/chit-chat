// @ts-nocheck
const models = require("../models").sequelize.models;

exports.GetRoomsByCourseId = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await models.Course.findByPk(id, {
      include: [{ model: models.Room }],
    });
    if (course) {
      res.status(200).send(course.dataValues.Rooms);
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
