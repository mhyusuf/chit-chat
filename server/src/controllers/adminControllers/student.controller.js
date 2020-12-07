// @ts-nocheck
const bcrypt = require("bcrypt");
const models = require("../../models").sequelize.models;
const uuid = require("uuid");

exports.DeleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await models.Student.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.RegisterStudent = async (req, res) => {
  try {
    const {
      email,
      name,
      password,
      avatar,
      roomRegistrationId,
      courseRegistrationId,
    } = req.body;
    const hashedPw = await bcrypt.hash(password, 10);
    const userId = uuid.v4();
    // get room pk using room UUID
    const resultRoom = await models.Room.findOne({
      where: { roomRegistrationId },
    });
    const RoomId = resultRoom.dataValues.id;
    const resultCourse = await models.Course.findOne({
      where: { registrationId: courseRegistrationId },
    });
    const CourseId = resultCourse.dataValues.id;
    // get course ok using course UUID
    const newStudent = await models.Student.create({
      userId,
      email,
      name,
      password: hashedPw,
      avatar,
      RoomId,
      CourseId,
    });
    res.status(201).send(newStudent);
  } catch (e) {
    res.status(500).send(e, e.message);
  }
};

exports.EditStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, name, password, avatar, RoomId, CourseId } = req.body;
    const student = await models.Student.findByPk(id);
    if (email) student.email = email;
    if (name) student.name = name;
    if (password) {
      const hashedPw = await bcrypt.hash(password, 10);
      student.password = hashedPw;
    }
    if (avatar) student.avatar = avatar;
    if (RoomId) student.RoomId = RoomId;
    if (CourseId) student.CourseId = CourseId;
    await student.save();
    res.status(200).send(student);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
