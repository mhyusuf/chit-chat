const bcrypt = require("bcrypt");
const { generateAuthToken } = require("../utils/authHelpers.js");
const models = require("../models").sequelize.models;

exports.LoginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await models.Student.findOne({ where: { email } });
    if (!student) {
      throw new Error("Invalid email or password");
    }
    const matched = await bcrypt.compare(password, student.password);
    if (!matched) {
      throw new Error("Invalid email or password");
    }
    const token = await generateAuthToken(student.userId);
    res.status(200).cookie("authToken", token).send(student);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.RegisterStudent = async (req, res) => {
  try {
    const { email, name, password, avatar, RoomId, CourseId } = req.body;
    const hashedPw = await bcrypt.hash(password, 10);
    const userId = uuid.v4();
    const newStudent = await models.Student.create({
      userId,
      email,
      name,
      password: hashedPw,
      avatar,
      RoomId,
      CourseId,
    });
    const token = await generateAuthToken(userId);
    res.status(201).cookie("authToken", token).send(newStudent);
  } catch (e) {
    res.status(500).send(e, e.message);
  }
};

exports.ChangeNameStudent = async (req, res) => {
  try {
    const { newName, studentPKey } = req.body;
    const result = await models.Student.update(
      { name: newName },
      { where: { id: studentPKey }, returning: true }
    );
    res.status(200).send(result[1][0]);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.ChangeAvatarStudent = async (req, res) => {
  try {
    const { newAvatarStr, studentPKey } = req.body;
    const result = await models.Student.update(
      { avatar: newAvatarStr },
      { where: { id: studentPKey }, returning: true }
    );
    res.status(200).send(result[1][0]);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.GetStudentById = () => {};
exports.GetStudentsByRoom = () => {};
exports.GetStudentsByCourse = () => {};
