// @ts-nocheck
const models = require("../../models").sequelize.models;
const uuid = require("uuid");

exports.CreateRoom = async (req, res) => {
  try {
    // take in UUID => get course pk and sister course pk
    const { id, name } = req.body;
    // const { CourseId1, CourseId2, name } = req.body;
    const result = await models.Course.findByPk(id);
    const roomRegistrationId = uuid.v4();
    const newRoom = await models.Room.create({ name, roomRegistrationId });
    newRoom.setCourses([result.dataValues.id, result.dataValues.sisterCourse]);
    await newRoom.save();
    res.status(201).send(newRoom);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.DeleteRoom = async (req, res) => {
  try {
    const { id } = req.params;
    await models.Room.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.EditRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const room = await models.Room.findByPk(id);
    if (name) room.name = name;
    await room.save();
    res.status(200).send(room);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
